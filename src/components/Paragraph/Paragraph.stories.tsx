import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import {Paragraph, ParagraphProps} from './Paragraph';

export default {
    title: 'Components/Paragraph',
    component: Paragraph,
    argTypes: {
        text: {control:'text'}
    }
} as Meta;

const Template: Story<ParagraphProps> = (args) => <Paragraph {...args} />;

export const Standard = Template.bind({});
Standard.args = {
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam at purus malesuada, blandit turpis sed, ullamcorper enim. Nam ac sem sodales, elementum leo a, placerat tortor. Duis maximus lobortis orci id pretium. Suspendisse ullamcorper auctor semper. Proin ac mattis risus. Maecenas id nisl interdum, malesuada nisl vitae, vestibulum ligula. Ut porta mi non neque fringilla aliquet. Integer est magna, sagittis eget gravida at, dignissim id enim. Curabitur ac iaculis mi, in sagittis neque.\n' +
        '\n' +
        'Maecenas varius, mauris a varius auctor, ante dui tincidunt neque, laoreet egestas mauris lectus non purus. Sed tempus ligula ligula, ut ultricies dui blandit venenatis. Quisque imperdiet pretium pharetra. Curabitur sollicitudin tortor et purus fringilla condimentum. Suspendisse potenti. Mauris elementum fringilla quam ac aliquet. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nam orci lacus, porta a venenatis sit amet, volutpat non ex. Praesent in pharetra turpis.\n' +
        '\n' +
        'In semper arcu quis urna rutrum mollis. Morbi pellentesque aliquam tellus, at placerat eros volutpat in. Donec commodo, elit vitae accumsan feugiat, nulla enim fringilla velit, in vestibulum ante lectus eget ipsum. Suspendisse quis commodo odio. Phasellus mattis nulla ac euismod aliquam. Sed ac nibh id sapien facilisis feugiat sed at ligula. Integer tempor augue vel felis egestas venenatis. Curabitur at faucibus quam. Etiam eget magna suscipit, eleifend leo eget, hendrerit nibh. Cras tincidunt facilisis blandit. Etiam quam ante, dignissim et vulputate sed, vestibulum ac quam.'
};


