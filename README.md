# express-graphql-hello
A hello demo for using GraphQL.js and express-graphql to build a GraphQL Server.

## 安装

cmd 命令行，执行命令`npm i`。

## 使用

### GraphQL.js 示例

测试 GraphQL.js 框架的语法。cmd 命令行执行命令`npm run app`后，可在命令行内输出如下的执行结果。

```
{
  data: [Object: null prototype] {
    hello: [Object: null prototype] { name: 'Hello world!' }
  }
}
```

### express-graphql 示例

构建 Express+GraphQL 的 API 服务器。cmd 命令行执行命令`npm run start`后，使用浏览器访问`http://localhost:7000/ghl，即可查看服务。在GraphiQL IDE 中输入如下查询 schema，可得到执行结果data。

```
{                                               
  hello {
    id
  }
}
```

```
{
  "data": {
    "hello": {
      "id": "abc"
    }
  }
}
```

