# website-translation-project

> 批量HTML翻译为中文的工具，适用于翻译各种中英文手册

### 准备

本项目需要提前需要安装 nodejs、npm 、ollama。


### 安装

拉取仓库

```
git clone --filter=blob:none --sparse https://github.com/qiushui-ai/ai-for-your-life.git website-translation-project

```


安装依懒

```
npm i
```

### 准备

- 将你需要翻译的网页放在根目录下 `html/项目名` 下
- 例如 nodejs 文档放在 `html/nodedoc/`


#### Ollama 快速设置

1. 下载模型: `ollama pull gemma3:12b`
2. 启动服务: `ollama serve`
3. 配置 `config.json`:

```json
{
  "ollama": {
    "baseUrl": "http://localhost:11434",
    "model": "gemma3:12b",
    "temperature": 0.1
  }
}
```



### 运行

- 运行 `node run.js 项目名` 例如 `node run.js nodedoc` 等待翻译


### 说明

- 只会翻译 `.html` 或 `.htm` 文件
- 如果文件较多,时间可能较长,几分种到几小时不等,翻译完成之后,会生成相对应的 _zh_ch 目录
- 内置翻译缓存，解决相同句子的多次翻译的问题,缓存文件在根目录的`cache`下,如果强制更新译文,请删除`cache`目录 与 _zh_ch 目录
- 翻译模型建议使用 gemma3:12b，快、准、减少因价值问题而无法翻译


## 后续开发

- 翻译错误的一些问题，需要记录到单独的地方，这样后期可以修复。

## 感谢

项目是从 https://github.com/aa24615/htmlTozh 改造而来的，感谢改项目的贡献者。


## License

[MIT license](https://opensource.org/licenses/MIT)

