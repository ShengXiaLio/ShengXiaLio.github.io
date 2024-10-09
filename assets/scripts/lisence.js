function getLatestCommitInfo(path) {
    const apiURL = `https://api.github.com/repos/ShengXiaLio/ShengXiaLio.github.io/commits${path}`;
    return fetch(apiURL)
        .then(response => response.json())
        .then(data => {
            if (!data.author) {
                throw new Error('无法获取提交作者信息');
            }
            return {
                author: data.author.login,
                date: new Date(data.committer.date).toLocaleString(),
                message: data.commit.message,
            };
        })
        .catch(error => {
            console.error('获取commit信息失败:', error);
            return null;
        });
}

function plugin(hook, vm) {
    hook.afterEach(function (html, next) {
        // 获取当前页面的路径
        const path = decodeURI(window.location.pathname);
        
        // 获取最后一次提交的信息
        getLatestCommitInfo(path)
            .then(commitInfo => {
                if (commitInfo) {
                    const footerContent = `
                        <br/>
                        <p class="last-update">最后更新于：${commitInfo.date}，由 ${commitInfo.author} 提交。</p>
                        <p class="commit-message">${commitInfo.message}</p>
                        <br/>
                    `;
                    next(html.replace("</footer>", footerContent + "</footer>"));
                } else {
                    next(html);
                }
            });
    });
}

window.$docsify.plugins = [].concat(plugin, window.$docsify.plugins);
