package id.haaweejee.landingpage.components

import androidx.compose.runtime.Composable
import com.varabyte.kobweb.compose.css.FontWeight
import com.varabyte.kobweb.compose.foundation.layout.Box
import com.varabyte.kobweb.compose.foundation.layout.Column
import com.varabyte.kobweb.compose.ui.Modifier
import com.varabyte.kobweb.compose.ui.modifiers.border
import com.varabyte.kobweb.compose.ui.modifiers.borderRadius
import com.varabyte.kobweb.compose.ui.modifiers.color
import com.varabyte.kobweb.compose.ui.modifiers.fillMaxWidth
import com.varabyte.kobweb.compose.ui.modifiers.fontFamily
import com.varabyte.kobweb.compose.ui.modifiers.fontSize
import com.varabyte.kobweb.compose.ui.modifiers.fontWeight
import com.varabyte.kobweb.compose.ui.modifiers.id
import com.varabyte.kobweb.compose.ui.modifiers.margin
import com.varabyte.kobweb.compose.ui.modifiers.maxWidth
import com.varabyte.kobweb.compose.ui.modifiers.padding
import com.varabyte.kobweb.compose.ui.modifiers.size
import com.varabyte.kobweb.compose.ui.toAttrs
import com.varabyte.kobweb.silk.components.graphics.Image
import com.varabyte.kobweb.silk.style.toModifier
import id.haaweejee.landingpage.models.Service
import id.haaweejee.landingpage.models.Theme
import id.haaweejee.landingpage.styles.ServiceCardStyle
import id.haaweejee.landingpage.util.FONT_FAMILY
import org.jetbrains.compose.web.css.LineStyle
import org.jetbrains.compose.web.css.px
import org.jetbrains.compose.web.dom.P
import org.jetbrains.compose.web.dom.Text

@Composable
fun ServiceCard(service: Service) {
    Column(
        modifier = ServiceCardStyle.toModifier()
            .maxWidth(300.px)
            .margin(all = 20.px)
            .padding(all = 20.px)
    ) {
        Box(
            modifier = Modifier
                .id("iconBox")
                .padding(all = 10.px)
                .margin(all = 20.px)
                .border(width = 2.px, style = LineStyle.Solid, color = Theme.Primary.rgb)
                .borderRadius(
                    topRight = 20.px,
                    topLeft = 20.px,
                    bottomLeft = 20.px,
                    bottomRight = 0.px
                )
        ) {
            Image(
                modifier = Modifier.size(40.px),
                src = service.icon,
            )
        }
        P(
            attrs = Modifier
                .fillMaxWidth()
                .margin(top = 0.px, bottom = 10.px)
                .fontFamily(FONT_FAMILY)
                .fontSize(18.px)
                .fontWeight(FontWeight.Bold)
                .toAttrs()
        ) {
            Text(service.title)
        }
        P(
            attrs = Modifier
                .fillMaxWidth()
                .margin(top = 0.px, bottom = 0.px)
                .fontFamily(FONT_FAMILY)
                .fontSize(14.px)
                .fontWeight(FontWeight.Normal)
                .toAttrs()
        ) {
            Text(service.description)
        }
    }
}