import { storiesOf } from '@storybook/angular';
import { withKnobs, text, boolean } from '@storybook/addon-knobs/angular';
import { SharedModule } from '../app/@shared/shared.module';
import { ButtonComponent } from '../app/atoms/button/button.component';


storiesOf('My Button', module)
  .addDecorator(withKnobs)
  .add('with some text', () => ({
    component: ButtonComponent,
    props: {
      text: text('text', 'Teste'),
      raised: boolean('raised', true)
    },
    moduleMetadata: {
      imports: [SharedModule]
    }
  }))




