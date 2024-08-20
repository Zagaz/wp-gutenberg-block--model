import { useBlockProps , InnerBlocks } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';

export default function save({ attributes }) {
	const { title , isTitleChecked } = attributes;
	const blockProps = useBlockProps.save

	return (
		<>
		<InnerBlocks.Content />

		{
			// if isTitleChecked is true and title is not empty
			isTitleChecked && title && (
				<div>
				<h2 {...blockProps}>{title}</h2>
				</div>
			)

		}
		</>

	);
}




