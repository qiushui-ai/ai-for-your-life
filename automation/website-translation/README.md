# htmlToZh

> 批量HTML翻译为中文的工具 适用于翻译各种中英文手册

### 准备

本程序需要安装 nodejs 与 npm 

**重要更新**: 本项目已从百度翻译API迁移到使用Ollama大模型进行翻译，支持本地运行，无需网络API密钥。

### 安装

拉取仓库

```
 git clone git@github.com:aa24615/htmlTozh.git
```

如果网络较慢,可使用国内gitee

```
git clone git@gitee.com:flash127/htmlToZh.git
```

安装依懒

```
npm i
```

### 准备

- 将你的手册或需要翻译的文件 放在根目录下 `html/项目名` 中
- 例如 nodejs文档 放在 `html/nodedoc/`
- 请安装并配置 [Ollama](https://ollama.ai/) 大模型服务
- 详细设置请参考 [OLLAMA_SETUP.md](./OLLAMA_SETUP.md)

#### Ollama 快速设置

1. 安装 Ollama: https://ollama.ai/
2. 下载模型: `ollama pull gemma3:12b`
3. 启动服务: `ollama serve`
4. 配置 `config.json`:

```json
{
  "ollama": {
    "baseUrl": "http://localhost:11434",
    "model": "gemma3:12b",
    "temperature": 0.1
  }
}
```

### 处理

- 自定义译文与替换字符 放在原目录下 `config.json` 中
- translation 为自定义译文
- replace 需要替换的字符

示例:

```javascript

{
  "translation": [
    {
      "name": "Composer",
      "value": "PHP依赖关系管理器"
    },
    {
      "name": "\uD83C\uDFE0 Home",
      "value": "\uD83C\uDFE0 首页"
    }
  ],
  "replace": [
    {
      "name": "</title>",
      "value": "Composer中文手册 </title>"
    }
  ]
}


```

### 条件

- 只翻译 `.html` 或 `.htm` 文件

### 运行

- 运行 `node run.js 项目名` 例如 `node run.js nodedoc` 等待翻译

### 输出

- 如果文件较多,时间可能较长,几分种到几小时不等,翻译完成之后,会生成相对应的 _zh_ch 目录

### 缓存

- 内置翻译缓存,缓存文件在根目录的`cache`下,如果强制更新译文,请删除`cache`目录 与 _zh_ch 目录

### 翻译引擎

- **Ollama大模型**: 使用本地大语言模型进行翻译，支持多种模型
- **推荐模型**: qwen2.5:4b (平衡速度和质量)
- **优势**: 无需网络API，翻译质量高，支持自定义提示词
- **配置**: 可在 `config.json` 中调整模型参数

### 常见问题

- 翻译过程中,如果遇到报错,请重新执行命令
- 如果还是无法解决,可选第n个文件继续翻译 如第100个文件 `node run.js 项目名 100`
- Ollama相关问题请参考 [OLLAMA_SETUP.md](./OLLAMA_SETUP.md)

### 联系我们




## 继续增加的功能

- 翻译错误的一些问题，需要记录到单独的地方，这样后期可以修复。


## License

[MIT license](https://opensource.org/licenses/MIT)
