import { __ } from "@wordpress/i18n";
import { useBlockProps ,
	MediaUpload,
	MediaUploadCheck,
	InnerBlocks

 } from "@wordpress/block-editor";
import { TextControl, CheckboxControl } from "@wordpress/components";
//Inspector Controls
 import { InspectorControls } from "@wordpress/block-editor";
import "./editor.scss";

export default function Edit({ attributes, setAttributes }) {
	const { title, isTitleChecked , allowedBlocks } = attributes;

	const blockProps = useBlockProps();

	function onChangeTitle(newTitle) {
		setAttributes({ title: newTitle });
	}
	function onCheckTitle(isChecked) {
		setAttributes({ isTitleChecked: isChecked });
	}

	return (
		<>
		<InspectorControls>
			<h2>{__("Inspector Controls", "wordcamp")}</h2>
			<CheckboxControl
				__nextHasNoMarginBottom
				label="Is Title Checked?"
				help="Check this box to show the title"
				checked={isTitleChecked}
				onChange={onCheckTitle}

			/>
		</InspectorControls>



			<TextControl
				label={__("Title", "my-block")}
				value={title}
				onChange={onChangeTitle}
				checked={isTitleChecked}
			/>

			<MediaUploadCheck>
				<MediaUpload
					onSelect={(media) => {
						setAttributes({ mediaURL: media.url });
					}}
					allowedTypes={["image"]}
					value={attributes.mediaID}
					render={({ open }) => (
						<button onClick={open}>Open Media Library</button>
					)}
				/>

				{attributes.mediaURL && (
					<img src={attributes.mediaURL} alt="Media" />
				)}

			</MediaUploadCheck>








			</>
	);
}
