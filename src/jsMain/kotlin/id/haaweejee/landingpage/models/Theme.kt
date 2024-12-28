package id.haaweejee.landingpage.models

import org.jetbrains.compose.web.css.CSSColorValue
import org.jetbrains.compose.web.css.rgb

enum class Theme(val hex: String, val rgb: CSSColorValue) {
    Primary(hex = "#328DD7", rgb = rgb(r = 50, g = 141, b = 215)),
    Secondary(hex = "#222222", rgb = rgb(r = 30, g = 30, b = 30)),
    Gray(hex = "#CFCFCF", rgb = rgb(r = 207, g = 207, b = 207)),
    LightGray(hex = "#EDEDED", rgb = rgb(r = 237, g = 237, b = 237)),
    LighterGray(hex = "#F9F9F9", rgb = rgb(r = 249, g = 249, b = 249)),
    White(hex = "#FFFFFF", rgb = rgb(r = 255, g = 255, b = 255))
}