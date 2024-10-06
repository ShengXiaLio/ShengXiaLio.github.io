# 拓展类



## Citizens2 - NPC 插件

概述：通过 NPC 创建各类玩法、支持所有生物类型、简易 NPC 对话和商店，指令绑定等

是否可替代：是（MythicMobs：可以自定义模型创建 NPC）

源：https://ci.citizensnpcs.co/job/Citizens2/

Wiki：https://wiki.citizensnpcs.co/Citizens_Wiki

命令：https://wiki.citizensnpcs.co/Commands

常见问题：https://wiki.citizensnpcs.co/Frequently_Asked_Questions



## TAB - 标签/Bossbar/计分板

概述：通过选项卡显示玩家列表和信息，侧边栏计分板、头顶显示信息、前缀后缀等

是否可替代：否，已是同类型最佳

源：https://www.spigotmc.org/resources/57806/

Wiki：https://github.com/NEZNAMY/TAB/wiki

命令/权限：https://github.com/NEZNAMY/TAB/wiki/Commands-&-Permissions

功能列表：https://github.com/NEZNAMY/TAB/wiki/Feature-guide:-Belowname#about



## HuskHomes - 传送套件

概述：玩家间传送、设置传送点、设置私人或公共家园传送点、返回死亡点，随机传送和经济成本设置

是否可替代：否，已是同类型最佳

源：https://www.spigotmc.org/resources/83767/

Wiki：https://william278.net/docs/huskhomes



## DecentHolograms - 全息图

概述：全息图/悬浮字/浮空字，用来展示文本和数据信息

是否可替代：否，已是同类型最佳

源：https://www.spigotmc.org/resources/96927/

Wiki：https://wiki.decentholograms.eu/



### 导入配置好的全息图未在预想的世界出现？

转到`plugins\DecentHolograms\holograms`

```yaml
# 位置:世界:坐标
location: world:5.500:100.000:0.500
```



### 如何在全息图中显示占位符？

首先，确保安装了 PlaceholderAPI，以 `player` 占位符为例。在游戏中执行 `/papi ecloud download Player`，随后`/papi reload`

最后，在游戏或配置里的全息图文本添加变量即可，示例全息图显示玩家名称：

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



### 如何用全息图显示伤害和生命值恢复？

转到`plugins\DecentHolograms\config.yml`

伤害显示

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

生命值恢复显示

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



## ajLeaderboards - 排行榜

概述：与全息图搭配使用，可以创建各类数据排行榜

是否可替代：否，已是同类型最佳

源：https://www.spigotmc.org/resources/85548/

Wiki：https://wiki.ajg0702.us/ajLeaderboards/setup/



## LiteSignIn - 签到

概述：自带 GUI 签到、加入信息、签到奖励设置、签到排行榜

是否可替代：否

源：https://www.spigotmc.org/resources/79584/



## MiniMOTD - 服务器 MOTD 显示

概述：用于多人游戏界面，服务器对外展示的自定义文本

是否可替代：否，已是同类型最佳

源：https://www.spigotmc.org/resources/81254/

Wiki：https://github.com/jpenilla/MiniMOTD/wiki



