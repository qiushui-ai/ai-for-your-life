const { ChatOllama } = require('@langchain/community/chat_models/ollama')
const { HumanMessage } = require('@langchain/core/messages')
const path = require('path')

// 读取配置文件
const config = require(path.join(process.cwd(), 'config.json'))

// 检查Ollama配置
if (!config.ollama || !config.ollama.model) {
    console.error("请在config.json中配置Ollama模型信息")
    process.exit(1)
}

// 创建Ollama聊天模型实例，使用配置文件中的设置
const model = new ChatOllama({
  baseUrl: config.ollama.baseUrl || 'http://localhost:11434',
  model: config.ollama.model,
  temperature: config.ollama.temperature || 0.1,
})

module.exports = async (word, to = 'zh') => {
  try {
    // 构建翻译提示词
    const prompt = `你是一位专业的英语到中文翻译专家，同时也是一位AI专家。你要帮我翻译n8n官方英文帮助文档，请严格按照以下规则翻译：

1. 只翻译给定的英文文本，不要添加任何额外的解释、说明或内容
2. 保持原文的简洁性，不要延展或扩展内容
3. 对于专业术语，优先保留英文，必要时可在括号中添加中文
4. 翻译结果应该与原文长度相近，不要大幅增加或减少内容
5. 保持原文的格式和结构
6. 请尊重原意，用简体中文重写英文内容

原文：${word}

请直接输出中文翻译，不要添加任何其他内容：`

    // 调用Ollama模型进行翻译
    const response = await model.invoke([
      new HumanMessage(prompt)
    ])

    // 提取翻译结果
    const translatedText = response.content.toString().trim()
    
    // 如果翻译结果为空或包含错误信息，返回原文本
    if (!translatedText || translatedText.includes('错误') || translatedText.includes('error')) {
      console.warn(`翻译失败，返回原文本: ${word}`)
      return word
    }

    return translatedText
  } catch (error) {
    console.error('Ollama翻译调用失败:', error.message)
    // 发生错误时返回原文本
    return word
  }
}
