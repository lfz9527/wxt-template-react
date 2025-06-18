declare namespace API {
    type AIRequestAccount = {
        aiAccountId?: number
        aiStoreId: number
        account: string
        password: string
        balance?: number
    }

    type AIRequestIds = {
        ids?: number[]
    }

    type AIRequestKey = {
        aiKeyId?: number
        aiAccountId: number
        appId?: string
        apiKey: string
        secretKey?: string
    }

    type AIRequestModel = {
        aiModelId?: number
        aiStoreId?: number
        modelName?: string
        originalPromptPrice?: number
        originalCompletionPrice?: number
        sellingPromptPrice?: number
        sellingCompletionPrice?: number
        isImage?: boolean
        isNlp?: boolean
        isReason?: boolean
        vipLevel?: number
        isEnable?: boolean
        fileTypes?: string[]
    }

    type AIRequestStore = {
        aiStoreId?: number
        storeName: string
        chatApiUrl?: string
        balanceApiUrl?: string
        comments?: string
    }

    type FBAccount = {
        /** 游客标识 */
        visotor?: string
        /** 邮箱 */
        email?: string
        /** 用户名 */
        userName?: string
        /** 昵称 */
        nickName?: string
        userRole?: UserRoleEnum
        /** 头像图片Id */
        headImageId?: number
        userProvider?: FBUserProvider
        /** 是否封号 */
        isClose?: boolean
    }

    type FBAddSave = {
        /** 收藏ID */
        saveId?: number
        /** 收藏的会话Id */
        chatMessageId: number
    }

    type FBAiDraw = {
        /** 模型id */
        aiModelId?: number
        /** 数量 */
        n?: number
        /** 提示词 */
        prompt?: string
        /** 大小 */
        size?: string
    }

    type FBAiModel = {
        /** Ai模型Id */
        aiModelId?: number
        /** 模型名称 */
        modelName: string
        /** 模型别名 */
        modelAlias?: string
        /** 本地化别名 */
        localModelAlias?: string
        /** 模型描述 */
        modelDescribe?: string
        /** 模型映射Id */
        modelMapId?: number
        /** 模型图标 */
        modelIconId?: number
        /** 消耗的积分类型 */
        modelIntegralType?: number
        /** 使用门槛最低vip套餐 */
        minVipLevel?: number
        /** 是否上线 */
        isOnline?: boolean
        /** 模型类型Id集 */
        aiModelTypeIds?: number[]
    }

    type FBAiModelType = {
        /** 模型类型Id */
        aiModelTypeId?: number
        /** 模型类型名称 */
        typeName: string
        /** 配置参数 */
        jsonStr?: string
        /** 排序 */
        sort?: number
    }

    type FBAiPromptWord = {
        /** 提示词Id */
        promptWordId?: number
        /** 提示词名称 */
        promptWordName: string
        /** 提示词内容 */
        promptWordContent: string
    }

    type FBChatMessage = {
        /** 会话表Id */
        chatSessionId?: number
        /** 消息Id */
        chatMessageId?: number
        /** 回复的消息Id */
        replyChatMessageId?: number
        /** 模型Id */
        modelId?: number
        /** 输入内容 */
        inputMessage: string
        /** 快捷功能Id */
        quickFunctionId?: number
        /** 网页Id集 */
        mediaIds?: number[]
    }

    type FBDeleteSave = {
        ids?: number[]
        chatMessageIds?: number[]
    }

    type FBFeedback = {
        /** 内容 */
        content: string
        /** 邮箱 */
        email?: string
    }

    type FBId = {
        /** 通用参数id */
        id?: number
    }

    type FBIds = {
        /** 通用参数id集合 */
        ids?: number[]
        /** 是否删除全部 */
        isDelAll?: boolean
    }

    type FBImage = {
        /** 图片id */
        imageId?: number
        /** 图片链接 */
        imgSrc?: string
        /** 图片宽 */
        width?: number
        /** 图片高 */
        height?: number
        /** 图片大小 */
        size?: number
        /** 图片hash值 */
        hash?: string
    }

    type FBInviteCode = {
        /** 邀请码Id */
        inviteCodeId?: number
        /** 关联用户 */
        userId?: number
        /** 邀请码 */
        code: string
        /** 最多使用次数 */
        maxUses: number
        /** 已使用次数 */
        usedCount?: number
        /** 邀请者奖励积分 */
        inviterIntegral?: number
        /** 使用者奖励积分 */
        userIntegral?: number
        /** 生效时间 */
        beginTime: string
        /** 过期时间 */
        endTime: string
        /** 是否上线 */
        isActive?: boolean
    }

    type FBModelCopy = {
        fromAiModelId?: number
        toAiModelId?: number
    }

    type FBParamTools = {
        /** 参数配置Id */
        paramToolsId?: number
        /** 模型Id */
        aiModelId?: number
        /** 参数名称 */
        paramName: string
        /** 参数描述 */
        paramLabel?: string
        /** 参数json串 */
        paramJson?: string
        /** 默认值 */
        defaultValue?: string
        /** 是否允许配置 */
        isAllowTool?: boolean
        /** 父类Id */
        parentId?: number
        /** 是否高级参数 */
        isHigh?: boolean
        /** 是否自定义参数 */
        isCustomize?: boolean
    }

    type FBPlugin = {
        /** 插件Id */
        pluginId?: number
        /** 插件名称 */
        pluginName: string
        /** 插件描述 */
        pluginDescribe?: string
        /** 插件提示词 */
        tipText?: string
        /** 插件icon图片id */
        iconImageId?: number
        /** 菜单高亮icon图片id */
        activeIconImageId?: number
        pluginType: PluginTypeEnum
        /** 插件路径 */
        pluginPath?: string
        /** 插件src */
        pluginSrc?: string
        /** 插件参数 */
        pluginParams?: string
        /** 插件执行函数字符串 */
        executeCode?: string
        /** 权限列表 */
        permissions?: string[]
        /** 是否启用 */
        isOpen?: boolean
        /** 打开类型 */
        openType?: string
        /** OpenType为新开页时，这里必填 */
        openUrl?: string
        /** 插件位置 */
        align?: string
        /** 排序 */
        sort?: number
    }

    type FBPromptChat = {
        /** 模型Id */
        aiModelId?: number
        /** 系统提示词 */
        systemPrompt?: string
        /** 用户提示词 */
        userPrompt?: string
        /** 文件链接 */
        mediaIds?: number[]
        /** 其它参数值 */
        paramValues?: Record<string, any>
    }

    type FBPromptClickButton = {
        /** 模型Id */
        aiModelId?: number
        /** 任务Id */
        taskId?: string
        /** 按钮Id */
        customId?: string
    }

    type FBPromptDraw = {
        /** 模型Id */
        aiModelId?: number
        /** 提示词 */
        prompt?: string
        /** 其它参数 */
        paramValues?: Record<string, any>
    }

    type FBQuickFunction = {
        /** 快捷功能Id */
        quickFunctionId?: number
        /** 父级功能 */
        parentId?: number
        /** 关联提示词Idxxxxxxxxxghb  gbbn ghvb */
        userPromptId?: number
        /** 分组名称 */
        groupName?: string
        /** 标题 */
        title?: string
        /** 子标题 */
        subTitle?: string
        /** 排序 */
        sort?: number
    }

    type FBSetting = {
        /** 配置Id（可选，0为新增） */
        settingId?: number
        /** 配置名称（必填） */
        settingName: string
        /** 键名（必填，唯一） */
        settingKey: string
        /** 值（必填） */
        settingValue?: string
    }

    type FBState = {
        state?: boolean
    }

    type FBStateIds = {
        ids?: number[]
        state?: boolean
    }

    type FBTransText = {
        /** 文本 */
        text?: string
        /** 源语言 */
        fromLanguage?: string
        /** 目标语言 */
        toLanguage?: string
    }

    type FBUpdateSave = {
        /** 收藏的Id */
        saveId?: number
        /** 内容 */
        content: string
    }

    type FBUpdateSessionName = {
        /** 会话Id */
        chatSessionId?: number
        /** 会话名称 */
        sessionTitle: string
    }

    type FBUpdateUserPassword = {
        userId?: number
        password?: string
    }

    type FBUseInviteCode = {
        /** 邀请码 */
        code: string
    }

    type FBUser = {
        userId?: number
        email?: string
        userName?: string
        nickName?: string
        userRole?: UserRoleEnum
        headImageId?: number
        isClose?: boolean
    }

    type FBUserHeadImage = {
        imageUrl?: string
        username?: string
    }

    type FBUserPrompt = {
        /** 用户提示词ID（新增时为0） */
        userPromptId?: number
        /** 用户ID */
        userId: number
        /** 模型ID */
        aiModelId: number
        /** 模型类型Id */
        aiModelTypeId: number
        /** 标题 */
        title?: string
        /** 系统提示词内容 */
        systemPrompt?: string
        /** 用户提示词内容 */
        userPrompt?: string
        /** 原价 */
        originalPrice: number
        /** 售价 */
        sellingPrice: number
        /** 用户提示词参数值 */
        userPromptParams?: FBUserPromptParam[]
        /** 用户提示词参数值Json简单形式 */
        promptParamsJson?: string
        /** 是否审核 */
        isCheck?: boolean
    }

    type FBUserPromptParam = {
        /** 参数表Id */
        paramToolsId: number
        /** 参数值 */
        promptParamValue: string
    }

    type FBUserProvider = {
        userProviderId?: number
        userId?: number
        providerId?: number
        providerUserId?: string
        providerEmail?: string
        providerPictureSrc?: string
        providerNickName?: string
        createTime?: string
    }

    type FBVipOrder = {
        /** vip套餐id */
        vipPackageId?: number
    }

    type FBVipPackage = {
        /** vip套餐Id */
        vipPackageId?: number
        /** 套餐名称 */
        vipPackageName: string
        vipPackageLevel?: VipPackageLevelEnum
        dateType?: VipDateTypeEnum
        /** 积分列表 */
        integrals?: FBVipPackageIntegral[]
        /** 价格清单 */
        currencys: FBVipPackageCurrency[]
        /** 是否启用 */
        isOpen?: boolean
    }

    type FBVipPackageCurrency = {
        /** Vip套餐价格Id */
        vipPackageCurrencyId?: number
        /** 货币代码 */
        currencyCode: string
        /** 对应的语言 */
        language?: string
        /** 标价 */
        markedPrice?: number
        /** 实际售价 */
        price?: number
        /** 是否默认价格 */
        isDefault?: boolean
    }

    type FBVipPackageIntegral = {
        /** 套餐积分Id */
        vipPackageIntegralId?: number
        integralType?: IntegralTypeEnum
        /** 积分值 */
        integralValue?: number
    }

    type getAccountGetEmailStateParams = {
        email?: string
    }

    type getAccountGetProviderByActionParams = {
        providerActionName?: string
    }

    type getAccountGetUserByAccountParams = {
        username?: string
        password?: string
    }

    type getAccountGetUserByEmailParams = {
        email?: string
    }

    type getAccountGetUserByIdParams = {
        id?: number
    }

    type getAccountGetUserByPhoneParams = {
        phoneCountry?: number
        phoneNumber?: string
    }

    type getAccountGetUserByVisotorIdParams = {
        visotorId?: string
    }

    type getAccountGetUserProviderByUserIdParams = {
        providerAction?: ProviderActionEnum
        providerUserId?: string
    }

    type getAdminAiModelGetAiModelByIdParams = {
        id?: number
    }

    type getAdminAiModelGetAiModelListParams = {
        /** 通用对象Id */
        id?: number
        /** 查询页数 */
        page?: number
        /** 查询行数 */
        count?: number
    }

    type getAdminAiModelMapGetAiAccountByIdParams = {
        id?: number
    }

    type getAdminAiModelMapGetAiAccountListParams = {
        /** 查询页数 */
        page?: number
        /** 查询行数 */
        count?: number
    }

    type getAdminAiModelMapGetAiKeyByIdParams = {
        id?: number
    }

    type getAdminAiModelMapGetAiKeyListParams = {
        /** 查询页数 */
        page?: number
        /** 查询行数 */
        count?: number
    }

    type getAdminAiModelMapGetAiModelByIdParams = {
        id?: number
    }

    type getAdminAiModelMapGetAiModelListParams = {
        /** 查询页数 */
        page?: number
        /** 查询行数 */
        count?: number
    }

    type getAdminAiModelMapGetAiStoreByIdParams = {
        id?: number
    }

    type getAdminAiModelMapGetAiStoreListParams = {
        /** 查询页数 */
        page?: number
        /** 查询行数 */
        count?: number
    }

    type getAdminAiModelTypeGetAiModelTypeByIdParams = {
        id?: number
    }

    type getAdminAiModelTypeGetAiModelTypeListParams = {
        /** 查询页数 */
        page?: number
        /** 查询行数 */
        count?: number
    }

    type getAdminAiPrompWordGetAiPrompWordByIdParams = {
        id?: number
    }

    type getAdminAiPrompWordGetAiPrompWordListParams = {
        /** 提示词Id */
        PrompWordId?: number
        /** 提示词名称 */
        PrompWordName?: string
        /** 查询页数 */
        page?: number
        /** 查询行数 */
        count?: number
    }

    type getAdminInviteCodeGetInviteCodeByIdParams = {
        /** 邀请码Id */
        id?: number
    }

    type getAdminInviteCodeGetInviteCodeListParams = {
        /** 关联用户 */
        userId?: number
        /** 邀请码 */
        code?: string
        /** 是否上线 */
        isActive?: boolean
        /** 通用对象Id */
        id?: number
        /** 查询页数 */
        page?: number
        /** 查询行数 */
        count?: number
    }

    type getAdminInviteCodeUsedGetInviteCodeUsedByIdParams = {
        /** 邀请码使用记录Id */
        id?: number
    }

    type getAdminInviteCodeUsedGetInviteCodeUsedListParams = {
        /** 邀请码使用记录Id */
        inviteCodeUsedId?: number
        /** 邀请码Id */
        inviteCodeId?: number
        /** 邀请码 */
        inviteCode?: string
        /** 用户Id */
        userId?: number
        /** 用户名 */
        userName?: string
        /** 查询页数 */
        page?: number
        /** 查询行数 */
        count?: number
    }

    type getAdminParamToolsGetParamToolsAllByModelIdParams = {
        aiModelId?: number
    }

    type getAdminParamToolsGetParamToolsByIdParams = {
        id?: number
    }

    type getAdminParamToolsGetParamToolsListParams = {
        /** 模型Id */
        aiModelId?: number
        /** 参数名称 */
        paramName?: string
        /** 是否允许配置 */
        isAllowTool?: boolean
        /** 通用对象Id */
        id?: number
        /** 查询页数 */
        page?: number
        /** 查询行数 */
        count?: number
    }

    type getAdminPluginGetPluginByIdParams = {
        id?: number
    }

    type getAdminPluginGetPluginListParams = {
        /** 通用对象Id */
        id?: number
        /** 查询页数 */
        page?: number
        /** 查询行数 */
        count?: number
    }

    type getAdminQuickFunctionGetQuickFunctionByIdParams = {
        /** 快捷功能Id */
        id?: number
    }

    type getAdminQuickFunctionGetQuickFunctionListParams = {
        /** 分组名称 */
        GroupName?: string
        /** 标题 */
        Title?: string
        /** 通用对象Id */
        id?: number
        /** 查询页数 */
        page?: number
        /** 查询行数 */
        count?: number
    }

    type getAdminUserGetUserListParams = {
        /** 用户昵称 */
        nickName?: string
        /** 用户名 */
        userName?: string
        /** 通用对象Id */
        id?: number
        /** 查询页数 */
        page?: number
        /** 查询行数 */
        count?: number
    }

    type getAdminUserPromptGetUserPromptByIdParams = {
        /** 用户提示词ID */
        id?: number
    }

    type getAdminUserPromptGetUserPromptListParams = {
        /** 用户ID */
        userId?: number
        /** 模型ID */
        aiModelId?: number
        /** 标题 */
        title?: string
        /** 系统提示词内容 */
        systemPrompt?: string
        /** 用户提示词内容 */
        userPrompt?: string
        /** 最低价 */
        minPrice?: number
        /** 最高价 */
        maxPrice?: number
        /** 是否审核 */
        isCheck?: boolean
        /** 通用对象Id */
        id?: number
        /** 查询页数 */
        page?: number
        /** 查询行数 */
        count?: number
    }

    type getAdminVipGetVipPackageByIdParams = {
        id?: number
    }

    type getAdminVipGetVipPackageListParams = {
        /** 通用对象Id */
        id?: number
        /** 查询页数 */
        page?: number
        /** 查询行数 */
        count?: number
    }

    type getAiModelGetAiModelByIdParams = {
        id?: number
    }

    type getAiModelGetModelListByVipPackageIdParams = {
        vipPackageId?: number
    }

    type getChatGetAiPrompWordByRecommentParams = {
        /** 链接 */
        url?: string
        /** 文本 */
        text?: string
        /** 会话Id */
        chatSessionId?: number
        /** 条数 */
        count?: number
    }

    type getChatGetChatMessageListBySelfSessionIdParams = {
        /** 消息Id */
        ChatMessageId?: number
        /** 会话Id */
        ChatSessionId?: number
        /** 查询页数 */
        page?: number
        /** 查询行数 */
        count?: number
    }

    type getChatGetChatSessionListBySelfParams = {
        /** 会话标题 */
        sessionTitle?: string
        /** 查询页数 */
        page?: number
        /** 查询行数 */
        count?: number
    }

    type getChatGetMjTaskParams = {
        taskId?: string
    }

    type getImageGetImageListParams = {
        /** 查询页数 */
        page?: number
        /** 查询行数 */
        count?: number
    }

    type getLogGetLogListParams = {
        /** 查询页数 */
        page?: number
        /** 查询行数 */
        count?: number
    }

    type getParamToolsGetParamToolsByModelIdParams = {
        aiModelId?: number
        isAllowTool?: boolean
    }

    type getPluginGetPluginByIdParams = {
        id?: number
    }

    type getPluginGetPluginListParams = {
        /** 通用对象Id */
        id?: number
        /** 查询页数 */
        page?: number
        /** 查询行数 */
        count?: number
    }

    type getPromptGetDrawProgressParams = {
        aiModelId?: number
        taskId?: string
    }

    type getQuickFunctionGetQuickFunctionListByGroupParams = {
        groupName?: string
    }

    type getSaveGetSaveByIdParams = {
        id?: number
    }

    type getSaveGetSaveListBySelfParams = {
        /** 内容 */
        content?: string
        /** 查询页数 */
        page?: number
        /** 查询行数 */
        count?: number
    }

    type getSystemGetSettingByIdParams = {
        /** 配置Id */
        id?: number
    }

    type getSystemGetSettingListParams = {
        /** 通用对象Id */
        id?: number
        /** 查询页数 */
        page?: number
        /** 查询行数 */
        count?: number
    }

    type getSystemGetSettingValueByKeyParams = {
        settingKey?: string
    }

    type getUserGetTokenForTempKeyParams = {
        tempKey?: string
    }

    type getUserGetUserByIdParams = {
        id?: number
    }

    type getUserGetUserListParams = {
        /** 用户昵称 */
        nickName?: string
        /** 用户名 */
        userName?: string
        /** 通用对象Id */
        id?: number
        /** 查询页数 */
        page?: number
        /** 查询行数 */
        count?: number
    }

    type getUserGetUserProviderByIdParams = {
        id?: number
    }

    type getUserGetUserProviderListParams = {
        /** 查询页数 */
        page?: number
        /** 查询行数 */
        count?: number
    }

    type getUserPromptGetUserPromptByIdParams = {
        id?: number
    }

    type getVipGetVipOrderByIdParams = {
        id?: number
    }

    type getVipGetVipOrderListParams = {
        /** 通用对象Id */
        id?: number
        /** 查询页数 */
        page?: number
        /** 查询行数 */
        count?: number
    }

    type IntegralTypeEnum = 1 | 2

    type MediaTypeEnum = 1 | 2 | 3 | 4 | 5

    type PluginTypeEnum = 1 | 2

    type ProviderActionEnum = 1

    type REVipOrder = {
        /** 订单Id */
        orderId?: string
        /** 价格 */
        amount?: number
        /** 货币 */
        currency?: string
        /** 商品名称 */
        goodsName?: string
        /** 商品描述 */
        goodsDesc?: string
        /** 数量 */
        goodsNum?: number
        /** 商品单价 */
        goodsPrice?: number
        /** 货币 */
        sourceCurrency?: string
        /** 签名 */
        sign?: string
    }

    type REWebApiCallback = {
        msg?: string
        code?: number
        data?: any
        /** 额外备用参数 */
        remark?: Record<string, any>
    }

    type UserRoleEnum = 1 | 2 | 3

    type VipDateTypeEnum = 1 | 2 | 3

    type VipPackageLevelEnum = 1 | 2 | 3
}
