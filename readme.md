Meu Projeto
Olá! No meu projeto, tenho um arquivo chamado index.ts onde escrevi um código TypeScript. O TypeScript é incrível, pois é um superset do JavaScript, o que significa que posso estender o JavaScript com tipagem estática opcional.

Aqui está um trecho do meu código TypeScript em index.ts:


function greet(name: string): string {
    return `Hello, ${name}!`;
}

console.log(greet('World'));
Para garantir que o TypeScript seja compilado corretamente, tenho um arquivo de configuração chamado tsconfig.json. Nele, especifiquei algumas opções, como o diretório de saída (outDir), o alvo do ECMAScript (target), o módulo (module), entre outras. Aqui está um exemplo:

{
    "compilerOptions": {
        "outDir": "./dist",
        "target": "es5",
        "module": "commonjs",
        "strict": true
    }
}

Para empacotar e otimizar meu código, utilizo o webpack, um bundler popular. Aqui está um exemplo do meu arquivo de configuração do webpack (webpack.config.js):


const path = require('path');

module.exports = {
    entry: './src/index.ts',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: ['.ts', '.js']
    }
};

Assim, quando abro meu arquivo HTML (index.html) no navegador, ele carrega o bundle JavaScript gerado pelo webpack, que, por sua vez, executa o código TypeScript original presente no arquivo index.ts. Isso me permite aproveitar os recursos avançados do TypeScript durante o desenvolvimento, enquanto o navegador recebe apenas o código JavaScript transpilado e empacotado.