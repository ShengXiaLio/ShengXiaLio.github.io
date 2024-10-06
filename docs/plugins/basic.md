# 基础类



## XConomy - 经济插件

概述：经济核心，提供基础的经济指令，包含跨服经济数据同步功能

是否可替代：是（PlayerPoints：另一种经济体系，可独立于 Vault 又可以配合使用，一般称为点券）

源：https://www.spigotmc.org/resources/75669/



### 如何设置 XConomy 为中文？

把 `plugins/XConomy/message.yml` 文件删除，`config.yml` 里改为 `language: Chinese`，最后重载



## LuckPerms - 权限管理

概述：创建组和分配权限来控制玩家可以使用的功能，设置聊天前缀后缀

是否可替代：否，已是同类型最佳

源：https://luckperms.net/

Wiki：https://luckperms.net/wiki/Home



## DeluxeMenus - 菜单

源：https://ci.extendedclip.com/job/DeluxeMenus/

是否可替代：是（TrMenu：功能拓展性非常强，由于是社区维护，更新不稳定）

Wiki：https://wiki.helpch.at/helpchat-plugins/deluxemenus



## Multiverse - 多世界管理

概述：单端多世界管理，可以新建/删除世界/维度，世界间传送和权限控制

是否可替代：否，已是同类型最佳

源：https://github.com/Multiverse/Multiverse-Core

Wiki：https://github.com/Multiverse/Multiverse-Core/wiki

命令：https://github.com/Multiverse/Multiverse-Core/wiki/Command-Reference

权限：https://github.com/Multiverse/Multiverse-Core/wiki/Permissions

世界属性：https://github.com/Multiverse/Multiverse-Core/wiki/World-properties



### 如何设置第一出生点/默认世界？

假设用 mv 创建或导入一个名为 world_hub 的主世界作为服务器单独的主城世界，那么如何让玩家登录后进入该世界呢？ 

第一步，在游戏中输入`/mv conf firstspawnoverride true `，或者在`config.yml`中将`firstspawnoverride` 为 `true`

如果设置为 true，则会确保玩家在第一次出生时进入您用 Multiverse 设置的出生点。如果使用了其他的出生插件，请将其设置为false。

第二步，在游戏中输入`/mv conf firstspawnworld [世界名称]`这是希望玩家出生的世界名称。它不必是`server.properties` 中设置的那个世界！

第三步，在指定的世界中，设置生成点`/mv setspawn`

> [!TIP]
>
> 所以？为什么不直接从第二步执行呢？第一步不是摆设吗？确实如此。还有这么麻烦，我为什么不直接把主城文件复制粘贴到服务器默认的`world`文件夹里呢？别急，请看下一段



### 如果有多个主世界，那么从下界返回该去哪个主世界？

如果有多个主世界，不修改其配置，那么它们的天气、时间、游戏模式等都是独立的，在哪个世界死亡就会在那个世界重生

那是不是意味着每个主世界都有独立的下界和末地呢？理论如此，但实际上不经过额外修改，所有主世界都共用一个下界和末地，服务器和插件不会生成新的下界和末地

所以从下界返回主世界，统一回到`server.properties/level-name=world`中设置的主世界

假设用 mv 创建或导入了 world_hub、world_res 两个主世界，在 world_hub、world_res 建造下界传送门进入下界后返回主世界，都会回到 world，而不是回 world_hub、world_res。

所以知道为什么要用 mv 设置默认世界了吗？因为这样可以避免在独立的主城世界里，后期出现不知从哪冒出的下界传送门

> [!TIP]
>
> 还有问题！在末地打败末影龙后，想传送回主世界却无效？！如果没在主世界设置床重生点，那么只会传送回末地的原点。别急，请看下一段“玩家死亡或通关后重生到哪个世界”部分



### 如何设置世界别名/玩家死亡或通关后重生到哪个世界/进入世界的费用等？

使用别名，将变量 `%multiverse_world_alias%` 写到想展示世界别名的插件配置里

当然，这个插件要支持使用 papi 变量，接着重载那个插件

进入 `plugins/Multiverse-Core/worlds.yml`

```yaml
world:
    ==: MVWorld
    # 是否隐藏世界
    hidden: 'false' 
    # 世界别名
    alias: world 
    # 世界别名颜色，必须是 AQUA, BLACK, BLUE, DARKAQUA, DARKBLUE, DARKGRAY, DARKGREEN, DARKPURPLE, DARKRED, GOLD, GRAY, GREEN, LIGHTPURPLE, RED, YELLOW, WHITE
    color: WHITE 
    # 世界别名样式，必须是 NORMAL, MAGIC, BOLD, STRIKETHROUGH, UNDERLINE, ITALIC
    style: NORMAL 
    # 是否允许玩家 PVP
    pvp: 'true'
    # 世界缩放比例
    scale: '1.0'
    # 玩家死亡或通关后重生的世界，空字符串意味着在这个世界内重生
    respawnWorld: ''
    # 是否允许天气变化
    allowWeather: 'true'
    # 游戏难度
    difficulty: EASY
    # 控制动物和怪物是否生成以及生成率
    spawning:
      ==: MVSpawnSettings
      animals:
        ==: MVSpawnSubSettings
        # 动物是否生成
        spawn: 'true'
        spawnrate: '-1'
        exceptions: []
      monsters:
        ==: MVSpawnSubSettings
        # 怪物是否生成
        spawn: 'true'
        spawnrate: '-1'
        exceptions: []
    # 进入这个世界的费用，这里设置为免费
    entryfee:
      ==: MVEntryFee
      amount: '0.0'
    # 是否启用饥饿
    hunger: 'true'
    # 是否启用自动恢复生命值
    autoHeal: 'true'
    # 调整重生点
    adjustSpawn: 'true'
    # 传送门形式
    portalForm: ALL
    # 默认游戏模式
    gameMode: SURVIVAL
    # 保持重生点在内存中加载
    keepSpawnInMemory: 'true'
    # 定义重生点位置
    spawnLocation:
      ==: MVSpawnLocation
      x: -64.0
      y: 71.0
      z: 48.0
      pitch: 0.0
      yaw: 0.0
    # 是否启用自动加载世界
    autoLoad: 'true'
    # 是否启用通过床来重生
    bedRespawn: 'true'
    # 世界黑名单列表，这里为空，表示世界没有被禁止
    worldBlacklist: []
    # 世界类型
    environment: NORMAL
    # 世界种子
    seed: '3160907858691774979'
    # 地形生成器，null 表示使用默认的地形生成器
    generator: 'null'
    # 玩家数量限制，-1 为不限制
    playerLimit: '-1'
    # 是否允许飞行
    allowFlight: 'true'
```



### 管理员在切换世界时，游戏模式也切换了！

Multiverse-Core 的新版本包括防止自动模式切换的额外权限。此权限采用以下格式：

```
mv.bypass.gamemode.WORLD_NAME
```

有了这个新权限，服务器所有者可以选择特定用户在他们之间传送时忽略每个世界的部分（或全部）游戏模式设置。例如，拥有的玩家可以是管理员，即使在生存世界中也能保持他们的创造模式设置。只需在喜欢的插件中设置正确的权限，就可以开始了。`mv.bypass.gamemode.*`



### Multiverse 说它不能带我去一个地方，因为它不安全！

有时 Minecraft 会将生成点设置在不可接受的位置（远低于地面），并且 Minecraft 服务器会接管生成。MV2 会处理这个问题，因此它永远不会将玩家带到不安全的地方。但是，这会产生冲突。要解决此问题，只需按照以下说明操作即可：

`/mvtp myworld` 提示 “那个世界不安全”。忽略，执行指令`/mvconfirm`。去到一个合适的地方设置生成点`/mv set spawn`



## ExcellentShop - 4 合 1 商店

概述：集虚拟商店（静态和旋转）、箱子商店、拍卖行/全球市场于一体，**这就是我青睐的原因**，尽管比不过下面细分领域的举例插件

是否可替代：是（虚拟商店：ShopGUI+、EconomyShopGUI-Premium、UltimateShop-Premium；箱子商店：QuickShop、Shop；拍卖行/全球市场：GlobalMarketPlus）

源：https://www.spigotmc.org/resources/50696/

Wiki：https://nightexpress.gitbook.io/excellentshop



## Lands - 领地/国家战争

概述：是领地，更是国家模拟，有租售/税收/银行/建立城镇和国家/临时营地/随机传送，更重要的是全 GUI 管理！

是否可替代：是（Residence：老牌领地插件、PlotSquared：老牌地皮插件、Towny：老牌城镇插件）

源：https://www.spigotmc.org/resources/53313/

Wiki：https://github.com/Angeschossen/Lands/wiki

命令：https://github.com/Angeschossen/Lands/wiki/Commands

权限：https://github.com/Angeschossen/Lands/wiki/Permissions

