// 静态导入
// import _ from 'lodash';

// function component() {
//     const element = document.createElement('div');
//     const btn = document.createElement('button');

//     // lodash（目前通过一个 script 引入）对于执行这一行是必需的
//     element.innerHTML = _.join(['Hello', 'webpack'], ' ');

//     return element;
// }

// document.body.appendChild(component());

// 动态导入
// function getComponent() {
//     const element = document.createElement('div');

//     return import('lodash')
//         .then(({ default: _ }) => {
//             const element = document.createElement('div');

//             element.innerHTML = _.join(['Hello', 'webpack'], ' ');

//             return element;
//         })
//         .catch((error) => 'An error occurred while loading the component');
// }

// getComponent().then((component) => {
//     document.body.appendChild(component);
// });

// 动态导入 优化写法
async function getComponent() {
    const element = document.createElement('div');
    const { default: _ } = await import('lodash');

    element.innerHTML = _.join(['Hello', 'webpack'], ' ');

    return element;
}

getComponent().then((component) => {
    document.body.appendChild(component);
});