# 拓展类



#### Citizens2 - NPC 插件

概述：通过 NPC 创建各类玩法、支持所有生物类型、简易 NPC 对话和商店，指令绑定等

源：[Citizens2 [Jenkins\] (citizensnpcs.co)](https://ci.citizensnpcs.co/job/Citizens2/)

Wiki：[公民维基 (citizensnpcs.co)](https://wiki.citizensnpcs.co/Citizens_Wiki)

命令：[命令 - Citizens Wiki (citizensnpcs.co)](https://wiki.citizensnpcs.co/Commands)

常见问题：[常见问题 - Citizens Wiki (citizensnpcs.co)](https://wiki.citizensnpcs.co/Frequently_Asked_Questions)



#### HuskHomes - 传送套件

概述：玩家间传送、设置传送点、设置私人或公共家园传送点、返回死亡点，随机传送和经济成本设置

源：[HuskHomes [1.17-1.21\] |设置房屋 |经纱 |生成 |Tp 和 Tpa |公共住宅 |跨服务器工作 |SpigotMC - 高性能 Minecraft](https://www.spigotmc.org/resources/huskhomes-1-17-1-21-set-homes-warps-spawn-tp-and-tpa-public-homes-works-cross-server.83767/)

Wiki：[首页 – HuskHomes Docs – William278.net - William278.net](https://william278.net/docs/huskhomes)



#### TAB - 标签/Bossbar/计分板

概述：通过选项卡显示玩家列表和信息，侧边栏计分板、头顶显示信息、前缀后缀等

源：[TAB [1.5 - 1.21.1\] |SpigotMC - 高性能 Minecraft](https://www.spigotmc.org/resources/tab-1-5-1-21-1.57806/)

Wiki：[首页 ·NEZNAMY/TAB 维基 (github.com)](https://github.com/NEZNAMY/TAB/wiki)

命令/权限：[Commands & Permissions · NEZNAMY/TAB Wiki (github.com)](https://github.com/NEZNAMY/TAB/wiki/Commands-&-Permissions)

功能列表：[Feature guide: Belowname · NEZNAMY/TAB Wiki (github.com)](https://github.com/NEZNAMY/TAB/wiki/Feature-guide:-Belowname#about)



#### DecentHolograms - 全息图

概述：全息图/悬浮字/浮空字，用来展示文本和数据信息

源：[体面的全息图 |1.8 - 1.21.1 |PAPI 支持 |无依赖 |SpigotMC - 高性能 Minecraft](https://www.spigotmc.org/resources/decentholograms-1-8-1-21-1-papi-support-no-dependencies.96927/)

Wiki：[欢迎 - DecentHolograms Wiki](https://wiki.decentholograms.eu/)



##### 导入配置好的全息图未在预想的世界出现？

​	转到`plugins\DecentHolograms\holograms`

```yaml
# 位置:世界:坐标
location: world:5.500:100.000:0.500
```



##### 如何在全息图中显示占位符？

​	首先，确保安装了 PlaceholderAPI，以 `player` 占位符为例。在游戏中执行 `/papi ecloud download Player`，随后`/papi reload`

​	最后，在游戏或配置里的全息图文本添加变量即可，示例全息图显示玩家名称：

```yaml
location: world_hub:-10.500:100.000:-10.500
enabled: true
display-range: 64
update-range: 64
update-interval: 20
facing: 0.0
down-origin: false
pages:
- lines:
  - content: '&f&b%player_name%'
    height: 0.3
```



##### 如何用全息图显示伤害和生命值恢复？

​	转到`plugins\DecentHolograms\config.yml`

​	伤害显示

```yaml
damage-display:
  # 您想启用此功能吗？ [true/false]
  enabled: false
  # 你想为玩家显示伤害吗？ [true/false]
  players: true
  # 你想对生物显示伤害吗？ [true/false]
  mobs: true
  # 您想显示0（或更小）的伤害吗？ [true/false]
  zero-damage: false
  # 临时全息图的存在时长
  duration: 40
  # 伤害占位符: {damage}
  # 动画和占位符在此处有效
  appearance: '&c{damage}'
  # 如果伤害是致命的，其外观效果
  critical-appearance: '&4&l暴击!&4 {damage}'
  # 高度偏移
  height: 0
```

​	生命值恢复显示

```yaml
healing-display:
  # 您想启用此功能吗? [true/false]
  enabled: false
  # 你想为玩家显示治疗效果吗? [true/false]
  players: true
  # 你想为生物显示治疗效果吗? [true/false]
  mobs: true
  # 临时全息图的存在时长
  duration: 40
  # 生命值占位符: {heal}
  # 动画和占位符在此处有效
  appearance: '&a+ {heal}'
  # 高度偏移
  height: 0
```



#### ajLeaderboards - 排行榜

概述：与全息图搭配使用，可以创建各类数据排行榜

源：[aj排行榜 |SpigotMC - 高性能 Minecraft](https://www.spigotmc.org/resources/ajleaderboards.85548/)

Wiki：[Setup | aj's Plugins Wiki (ajg0702.us)](https://wiki.ajg0702.us/ajLeaderboards/setup/)



#### MiniMOTD - 服务器 MOTD 显示

概述：用于多人游戏界面，服务器对外展示的自定义文本

源：[MiniMOTD - 具有 RGB 渐变的服务器列表 MOTD 插件 |SpigotMC - 高性能 Minecraft](https://www.spigotmc.org/resources/minimotd-server-list-motd-plugin-with-rgb-gradients.81254/)

Wiki：[首页 ·jpenilla/MiniMOTD 维基 (github.com)](https://github.com/jpenilla/MiniMOTD/wiki)



#### LiteSignIn - 签到

概述：自带 GUI 签到、加入信息、签到奖励设置、签到排行榜

源：[Lite 登录 [1.7-1.21\] |签到奖励 |胸部 GUI |排行榜 |MySQL & SQLite |SpigotMC - 高性能 Minecraft](https://www.spigotmc.org/resources/lite-sign-in-1-7-1-21-sign-in-rewards-chest-gui-leaderboard-mysql-sqlite.79584/)