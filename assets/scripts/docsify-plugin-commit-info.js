// docsify-plugin-commit-info.js
async function getLatestCommitInfo(path) {
    // 将路径转换为相对路径，去掉开头的斜杠
    const relativePath = path.startsWith('/') ? path.slice(1) : path;

    const apiURL = `https://api.github.com/repos/ShengXiaLio/ShengXiaLio.github.io/commits?path=${encodeURIComponent(relativePath)}`;
    try {
        const response = await fetch(apiURL);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        if (data.length > 0) {
            const latestCommit = data[0];
            return {
                author: latestCommit.author ? latestCommit.author.login : '未知',
                date: new Date(latestCommit.commit.author.date).toLocaleString(),
                message: latestCommit.commit.message,
            };
        }
        return null;
    } catch (error) {
        console.error('获取commit信息失败:', error);
        return null;
    }
}

function plugin(hook, vm) {
    hook.afterEach(async function (html) {
        // 获取当前页面的路径
        const path = decodeURI(window.location.pathname);

        // 获取最后一次提交的信息
        const commitInfo = await getLatestCommitInfo(path);

        if (commitInfo) {
            const footerContent = `
                <br/>
                <p class="last-update">最后更新于：${commitInfo.date}，由 ${commitInfo.author} 提交。</p>
                <p class="commit-message">${commitInfo.message}</p>
                <br/>
            `;

            // 检查页面是否存在 <footer> 元素
            const footerElement = document.querySelector('footer');
            if (footerElement) {
                // 替换 <footer> 内容
                footerElement.innerHTML = footerContent;
            } else {
                // 如果没有 <footer> 元素，则添加一个新的 <footer>
                const body = document.querySelector('body');
                const footer = document.createElement('footer');
                footer.innerHTML = footerContent;
                body.appendChild(footer);
            }
        }
    });
}

window.docsifyPluginCommitInfo = plugin;