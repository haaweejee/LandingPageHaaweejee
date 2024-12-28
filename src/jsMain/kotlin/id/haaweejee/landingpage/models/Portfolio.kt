package id.haaweejee.landingpage.models

enum class Portfolio(
    val image: String,
    val title: String,
    val description: String,
    val link: String,
) {
    One(
        image = "portfolio1.jpg",
        title = "Uber: Urunan Bersama",
        description = "Android App",
        link = ""
    ),
    Two(
        image = "portfolio2.jpg",
        title = "Image Converter JPG/WEB/PNG",
        description = "Android App",
        link = "https://play.google.com/store/apps/details?id=id.haaweejee.imageconverter"
    ),

}