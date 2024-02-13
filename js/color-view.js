import { html, render } from 'https://unpkg.com/lit-html@1.0.0/lit-html.js';
// import { register, create } from '@openfin/workspace/notifications';
import { register, create } from '@openfin/workspace/notifications';

class ColorPicker extends HTMLElement {
    constructor() {
        super();

        this.render();
        fin.me.on('host-context-changed', this.onContextChanged);

        // Set initial color based on current context value
        fin.Platform.getCurrentSync().getWindowContext().then(initialContext => {
            if (initialContext && initialContext.color) {
                this.applyColor(initialContext.color);
            }
        });

    }

    render = () => {
        const content = html`
        <fieldset>
            <p>
                I am context-sensitive
            </p>
            <form @submit=${this.setColor}>
                <input type="text" placeholder="Enter color" autofocus>
                <button action="submit">Set Color</button>
            </form>
            <button @click=${() => fin.me.showDeveloperTools()}>
                Show dev tools
            </button>
            <button @click=${() => this.createNotification()}>
            Show notification
            </button>
        </fieldset>`;
        return render(content, this);
    }

   setColor = async (event) => {
        event.preventDefault();
        const color = this.querySelector('input').value;
        await fin.Platform.getCurrentSync().setWindowContext({ color });
    }

   applyColor = async (color) => {
        document.body.style.backgroundColor = color;
    }

    onContextChanged = (e) => {
        const { context: { color } } = e;
        this.applyColor(color);
    }

    createNotification = async () => {
        // define notifications provider -- a Workspace Platform in this case
        const examplePlatform = 
        {
            id: "test_provider",
            title: "Custom Notification Platform",
            icon: "https://example.com/favicon.ico"
        };
    
        // explicitly register defined platform
        // you can also pass the register() function without options
        await register(examplePlatform);
        await create({
            id: 'myNotificationId',
            title: 'Notification Title',
            body: 'Text to display within the notification body',
            icon: 'https://openfin.co/favicon.ico'
       }, {
            reminderDate: new Date('October 21, 2015 07:28:00')
       });
    }
}


customElements.define('color-picker', ColorPicker);
