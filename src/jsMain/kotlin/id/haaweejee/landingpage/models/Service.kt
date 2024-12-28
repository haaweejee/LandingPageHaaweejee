package id.haaweejee.landingpage.models

enum class Service(
    val icon: String,
    val title: String,
    val description: String
) {
    Android(
        icon = "android_icon.svg",
        title = "Android Development",
        description = "I have Experience More than 3 Years in Android Development in Media and IT Industry" +
                "so that i can is assurance for i can make good quality Apps and with good Timeline."
    ),
    IOS(
        icon = "apple_icon.svg",
        title = "IOS Development",
        description = "You can also request IOS App too, if you needed, With Flutter you can create Both Android" +
                "and Apple Apps in same time so don't worry to request it if you need."
    ),
    Website(
        icon = "web_icon.svg",
        title = "Website Development",
        description = "You worry if you not success develop Apps? just use Website as MVP and you can create your" +
                "product to check is your product is fit on market or not."
    ),
    Design(
        icon = "design_icon.svg",
        title = "UI/UX Design",
        description = "I have knowledge to Design Mobile Apps With Figma, if you need discuss just discuss it."
    ),
    Business(
        icon = "business_icon.svg",
        title = "Business Analysis",
        description = "I have Experience More than 3 Years in Android Development in Media and IT Industry" +
                "so that i can is assurance for i can make good quality Apps and with good Timeline"
    ),
    SEO(
        icon = "seo_icon.svg",
        title = "SEO Marketing",
        description = "I have Experience More than 3 Years in Android Development in Media and IT Industry" +
                "so that i can is assurance for i can make good quality Apps and with good Timeline"
    ),

}