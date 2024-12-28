package id.haaweejee.landingpage.components

import androidx.compose.runtime.Composable
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.setValue
import com.varabyte.kobweb.compose.css.Cursor
import com.varabyte.kobweb.compose.foundation.layout.Box
import com.varabyte.kobweb.compose.foundation.layout.Column
import com.varabyte.kobweb.compose.ui.Alignment
import com.varabyte.kobweb.compose.ui.Modifier
import com.varabyte.kobweb.compose.ui.attrsModifier
import com.varabyte.kobweb.compose.ui.graphics.Colors
import com.varabyte.kobweb.compose.ui.modifiers.backgroundColor
import com.varabyte.kobweb.compose.ui.modifiers.border
import com.varabyte.kobweb.compose.ui.modifiers.borderRadius
import com.varabyte.kobweb.compose.ui.modifiers.boxShadow
import com.varabyte.kobweb.compose.ui.modifiers.classNames
import com.varabyte.kobweb.compose.ui.modifiers.color
import com.varabyte.kobweb.compose.ui.modifiers.cursor
import com.varabyte.kobweb.compose.ui.modifiers.fillMaxWidth
import com.varabyte.kobweb.compose.ui.modifiers.height
import com.varabyte.kobweb.compose.ui.modifiers.id
import com.varabyte.kobweb.compose.ui.modifiers.margin
import com.varabyte.kobweb.compose.ui.modifiers.onClick
import com.varabyte.kobweb.compose.ui.modifiers.width
import com.varabyte.kobweb.compose.ui.toAttrs
import com.varabyte.kobweb.silk.components.forms.Input
import com.varabyte.kobweb.silk.style.breakpoint.Breakpoint
import com.varabyte.kobweb.silk.style.toModifier
import id.haaweejee.landingpage.models.Theme
import id.haaweejee.landingpage.styles.InputStyle
import id.haaweejee.landingpage.styles.MainButtonStyle
import kotlinx.browser.document
import kotlinx.browser.window
import org.jetbrains.compose.web.attributes.InputType
import org.jetbrains.compose.web.css.px
import org.jetbrains.compose.web.dom.Button
import org.jetbrains.compose.web.dom.Label
import org.jetbrains.compose.web.dom.Text
import org.jetbrains.compose.web.dom.TextArea
import org.w3c.dom.HTMLTextAreaElement

@Composable
fun ContactForm(breakpoint: Breakpoint) {
    var inputName by remember { mutableStateOf("") }
    var inputMessage by remember { mutableStateOf("") }

    Column(
    ) {
        Label(
            attrs = Modifier
                .classNames("form-label")
                .toAttrs(),
            forId = "inputName"
        ) {
            Text("Name")
        }
        Input(
            type = InputType.Text,
            modifier = InputStyle.toModifier()
                .id("inputName")
                .classNames("form-control")
                .margin(bottom = 10.px)
                .width(if (breakpoint > Breakpoint.MD) 500.px else 250.px)
                .backgroundColor(Theme.LighterGray.rgb)
                .boxShadow(0.px, 0.px, 0.px, 0.px, null)
                .attrsModifier {
                    attr("placeholder", "Full Name")
                    attr("name", "name")
                    attr("required", "true")
                },
            onValueChange = {
                inputName = it
                console.log(it)
            },
            value = inputName
        )
        Label(
            attrs = Modifier
                .classNames("form-label")
                .toAttrs(),
            forId = "inputMessage"
        ) {
            Text("Message")
        }
        TextArea(
            attrs = InputStyle.toModifier()
                .id("inputMessage")
                .classNames("form-control")
                .height(150.px)
                .margin(bottom = 20.px)
                .width(if (breakpoint > Breakpoint.MD) 500.px else 250.px)
                .backgroundColor(Theme.LighterGray.rgb)
                .boxShadow(0.px, 0.px, 0.px, 0.px, null)
                .attrsModifier {
                    attr("placeholder", "Your Message")
                    attr("name", "message")
                    attr("required", "true")
                }
                .toAttrs(),
        )
        Box(
            modifier = Modifier.fillMaxWidth(),
            contentAlignment = Alignment.Center
        ) {
            Button(
                attrs = MainButtonStyle.toModifier()
                    .height(40.px)
                    .border(width = 0.px)
                    .borderRadius(r = 5.px)
                    .backgroundColor(Theme.Primary.rgb)
                    .color(Colors.White)
                    .cursor(Cursor.Pointer)
                    .onClick {
                        inputMessage =
                            (document.getElementById("inputMessage") as? HTMLTextAreaElement)?.value.orEmpty()
                        console.log("TextArea Value: $inputMessage")
                        window.open(
                            "https://api.whatsapp.com/send/?phone=6281387258259&text=Saya $inputName, $inputMessage&type=phone_number&app_absent=0",
                            ""
                        )
                    }
                    .toAttrs(),
            ) {
                Text("Submit")
            }
        }
    }


}