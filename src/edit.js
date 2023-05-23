/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { 
	useBlockProps, 
	RichText, 
	AlignmentControl, 
	BlockControls 
} from '@wordpress/block-editor';

import { Button } from '@wordpress/components';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */
export default function Edit({ attributes, setAttributes }) {
  const { slides } = attributes;

  const blockProps = useBlockProps();

  const handleAddSlide = () => {
    const newSlide = {
      heading: '',
      imgLink: '',
      link: '',
      rating: '',
    };

    setAttributes({
      slides: [...slides, newSlide],
    });
  };

  return (
      <div {...blockProps}>
		<table className='table table-bordered table-striped'>
			<thead>
				<tr>
					<th>Heading</th>
					<th>Image URI</th>
					<th>Affiliate Link</th>
					<th>Rating (out of 5)</th>
				</tr>
			</thead>
			<tbody>
			{slides.map((slide, index) => (
				<tr key={index}>
					<RichText
						tagName="td"
						value={slide.heading}
						onChange={(newHeading) => {
							const updatedSlides = [...slides];
							updatedSlides[index].heading = newHeading;
							setAttributes({ slides: updatedSlides });
						}}
						placeholder="Heading goes here..."
						allowedFormats={['core/bold', 'core/italic', 'core/link']}
					/>
					<RichText
					tagName="td"
					value={slide.imgLink}
					onChange={(newImgLink) => {
						const updatedSlides = [...slides];
						updatedSlides[index].imgLink = newImgLink;
						setAttributes({ slides: updatedSlides });
					}}
					placeholder="Image link goes here..."
					allowedFormats={['core/bold', 'core/italic', 'core/link']}
					/>
					<RichText
					tagName="td"
					value={slide.link}
					onChange={(newLink) => {
						const updatedSlides = [...slides];
						updatedSlides[index].link = newLink;
						setAttributes({ slides: updatedSlides });
					}}
					placeholder="Affiliate link goes here..."
					allowedFormats={['core/bold', 'core/italic', 'core/link']}
					/>
					<RichText
					tagName="td"
					value={slide.rating}
					onChange={(newRating) => {
						const updatedSlides = [...slides];
						updatedSlides[index].rating = newRating;
						setAttributes({ slides: updatedSlides });
					}}
					placeholder="Rating goes here..."
					allowedFormats={['core/bold', 'core/italic', 'core/link']}
					/>
				</tr>
			))}
			</tbody>
		</table>
		<Button variant="secondary" onClick={handleAddSlide}>
			{__('Add Row', 'swiper-slider')}
		</Button>
      </div>
  );
}
  