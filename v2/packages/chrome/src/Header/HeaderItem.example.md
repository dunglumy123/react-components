```jsx
const CallIn = require('@zendesk/garden-svg-icons/src/14-call-in.svg');
const InlineSVG = require("inline-svg-react").default;

<Header>
    <HeaderItem maxX focused>
        <HeaderItemText>
            maxX + Focused
        </HeaderItemText>
    </HeaderItem>
    <HeaderItem maxY focused>
        <HeaderItemText>
            maxY + Focused
        </HeaderItemText>
    </HeaderItem>
    <HeaderItem focused round>
        <HeaderItemText>
            Round + Focused
        </HeaderItemText>
    </HeaderItem>
    <HeaderItem focused>
        <HeaderItemText>
            Focused
        </HeaderItemText>
    </HeaderItem>
    <HeaderItem active>
        <HeaderItemText>
            Active
        </HeaderItemText>
    </HeaderItem>
    <HeaderItem hovered>
        <HeaderItemText>
            Hovered
        </HeaderItemText>
    </HeaderItem>
    <HeaderItem>
        <HeaderItemText>
            Default
        </HeaderItemText>
    </HeaderItem>
    <HeaderItem>
        <HeaderItemIcon>
            <InlineSVG icon={CallIn} />
        </HeaderItemIcon>
        <HeaderItemText clipped>
            Logo Only
        </HeaderItemText>
    </HeaderItem>
</Header>
```