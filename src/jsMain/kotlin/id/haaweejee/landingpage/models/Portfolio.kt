package id.haaweejee.landingpage.models

enum class Portfolio(
    val image: String,
    val title: String,
    val description: String
) {
    One(
        image = "portfolio1.jpg",
        title = "Uber: Urunan Bersama",
        description = "Android App"
    ),
    Two(
        image = "portfolio2.jpg",
        title = "Image Converter JPG/WEB/PNG",
        description = "Android App"
    ),

}