

import FontIconPicker from "@fonticonpicker/react-fonticonpicker"


import CTBIcon from "../component/icon/CTBIcon.json"
import renderSVG from "../component/icon/renderIcon"

 
 const { Component, Fragment } = wp.element
 
 import { __ } from '@wordpress/i18n';
 const { RichText, InspectorControls, PanelColorSettings,MediaUpload,BlockControls,AlignmentToolbar  } = wp.blockEditor;
 
 const {
	dispatch,
	select,
	
} = wp.data
 const {
	 PanelBody,
	 TextControl,
	 Button,
	 TextareaControl,
	 Toolbar,
	 RadioControl,
	 SelectControl 
 } = wp.components

 let svg_icons = Object.keys( CTBIcon )
 
 class Edit extends Component {
 
		 
		 componentDidMount() {
			 //Store client id.
			 this.props.setAttributes( { block_id: this.props.clientId } )
			 let root_id = select("core/block-editor").getBlockRootClientId(this.props.clientId);
			 
			 let index = select("core/block-editor").getBlockIndex(this.props.clientId,root_id);
			 if(this.props.attributes.block_position_active == false){
				if(index % 2 != 0){
					this.props.setAttributes({blockPosition:"left"})
				}
				else{
					this.props.setAttributes({blockPosition:"right"})
				}
			 }
		 }	
		
		 render() {
			
			 // Setup the attributes.
			 const {
				 setAttributes,
				 attributes: {
					 icon,
					 t_date,
					 time_heading,
					 time_desc,
					 time_image,
					 iconToggle,
					 iconColor,
					 blockPosition,
					 timelineDesign,
					 timelineLayout,
					 imageSize,
					 imageOption,
					 timeLineImage
				 },
			 } = this.props
			 const getImage = (size,image_value) => {
				 let image_size_url= ""
				if(timelineLayout == "vertical"){
				
				let images=Object.entries(image_value)
				images.map(image=>{
					
					if(image[0] == size){
						image_size_url = image[1].url
						
					} 
				})
			}
				else{
					
					image_size_url= image_value.full.url
				}
				return(
				image_size_url
				)
			}
			// Parameters for FontIconPicker
			const icon_props = {
				icons: svg_icons,
				value: icon,
				onChange: (value)=>(setAttributes({icon:value})),
				isMulti: false,
				renderFunc: renderSVG,
				noSelectedPlaceholder: __( "Select Icon" )
			}

			 const StoryDetail = () => (
					<div className="story-details">
					<MediaUpload
                       onSelect={ ( value ) => {
						   let image_sizes = Object.keys(value.sizes)
						let image_size_option = []
						image_sizes.map(size=>{
							image_size_option.push({label:size.charAt(0).toUpperCase() + size.slice(1),value:size})
						})
						let img=getImage(imageSize,value.sizes)
						setAttributes({timeLineImage:img,imageOption:image_size_option,time_image:value})
					}}
						value = {timeLineImage}
                        allowedTypes={ [ 'image' ] }
                        render={ ( { open } ) => (
							<Fragment>
							{timeLineImage !== "none" ?
							<Fragment>
								<div className="story-image">
							<img src={timeLineImage}  />
						</div>
							<Button isSecondary onClick={(value) => setAttributes({timeLineImage:'none'})}>
								{__('Remove Image')}</Button>
								</Fragment>
							:
							<Button isSecondary onClick={ open }> { __( 'Upload/Choose Image', 'timeline-block' ) }</Button>
						}
							</Fragment>
						) }
                          
                        />
					
			
						<div className="story-content">
						<RichText
						tagName="h3"
						placeholder={ __( 'Enter Story Title', 'timeline-block' ) }
						value={ time_heading }
						onChange={ ( value ) => setAttributes( { time_heading: value } ) }
						keepPlaceholderOnFocus={true}
						
					/>
					<RichText
						tagName="p"
						placeholder={ __( 'Enter story description here.', 'timeline-block' ) }
						value={ time_desc }
						onChange={ ( value ) => setAttributes({time_desc:value})}
						keepPlaceholderOnFocus={true}
					
					/>
					</div>
						
				</div>
			 )
			 const StoryTime = () => (
									<RichText
										tagName="p"
										placeholder={ __( 'Date / Custom Text', 'timeline-block' ) }
										value={t_date}
										onChange={ ( value ) => setAttributes({t_date:value})}										
										/>
			 )
			 const content_control = (
				 <InspectorControls>
					<PanelBody title={__("Story Setting")}>
					<TextControl 
						 label="Story Heading"
						 value={ time_heading }
						 onChange={ ( value ) => setAttributes({time_heading:value})}
					/>
				    <TextareaControl
						label="Story Description"
						value={ time_desc }
						onChange={ ( value ) => setAttributes({time_desc:value})}
					/>
						<TextControl 
						 label="Primary Label(Date/Steps)"
						 value={ t_date }
						 onChange={ ( value ) => setAttributes({t_date:value})}
					/>
					{	timelineLayout == "vertical" && timelineDesign == "both-sided" ?
						<RadioControl
							label="Story position"
							selected={ blockPosition }
							options={ [
								{ label: 'Left',value:"left"},
								{ label: 'Right',value:"right"},
							] } 
							onChange={( value )=>setAttributes({blockPosition:value,block_position_active:true})}
						/>
						:null
		 }


					<label>Story Image</label>
					<br></br>
					<MediaUpload
						title="Story Image"
						onSelect={ ( value ) => {
							let image_sizes = Object.keys(value.sizes)
						 let image_size_option = []
						 image_sizes.map(size=>{
							 image_size_option.push({label:size.charAt(0).toUpperCase() + size.slice(1),value:size})
						 })
						 let img=getImage(imageSize,value.sizes)
						 setAttributes({timeLineImage:img,imageOption:image_size_option,time_image:value})
					 }}
						value = {timeLineImage}
                        allowedTypes={ [ 'image' ] }
						modalClass=""
                        render={ ( { open } ) => (
							<Fragment>
							{timeLineImage !== "none" ?
							<Fragment>
							<img src={timeLineImage}  />
							<Button isSecondary onClick={(value) => setAttributes({timeLineImage:'none'})}>
								{__('Remove Image')}</Button>
								</Fragment>
							:
							<Button isSecondary onClick={ open }> { __( 'Upload/Choose Image', 'timeline-block' ) }</Button>
						}
							</Fragment>
						) }
						
                        />
						{timelineLayout == "vertical" && timeLineImage !== "none"  ?
						<SelectControl
							label="Image Size"
							value={ imageSize }
							options={imageOption}
							onChange={ ( newSize ) => {
								let img=getImage(newSize,time_image.sizes)
								setAttributes({timeLineImage:img,imageSize:newSize})
						}}
						/>:
						null
		 				}
						<hr className="timeline-block-editor__separator"></hr>
						<RadioControl
							label="Story Icon"
							selected={ iconToggle }
							options={ [
								{ label: 'Default(dot)',value:"false"},
								{ label: 'Custom(Font Awesome Icon)',value:"true"},
							] } 
							onChange={( value )=>setAttributes({iconToggle:value})}
						/>
						{iconToggle == "true" ?
						<Fragment> <div className="timeline-block-iconpicker" ><FontIconPicker {...icon_props} /> </div>
				
						</Fragment>
						: null}	
						</PanelBody>
				 </InspectorControls>
			 )
			 const icon_div =  <div className="timeline-block-icon">
				 {icon !== "" && iconToggle == "true" ? <span className="timeline-block-render-icon" >{ renderSVG(icon) }</span>:null}
			 </div> 
					 return (
						 <Fragment>
						 <BlockControls>
						 	<Toolbar>
								<Button
									label="Delete Block"
									icon="trash"
									onClick={() => 	dispatch('core/block-editor').removeBlock(this.props.clientId,true)}
								/>
							</Toolbar>
						</BlockControls>
						{content_control}
					<div className={"timeline-content icon-"+iconToggle+""}>
							<div className = {" timeline-block-vertical-timeline ctl-row  position-" +blockPosition+""}>
						
								<div className="ctl-6 timeline-block-time">
									<div className="story-time">
										{StoryTime()}
									</div>
								</div>
										{icon_div}
								<div className="ctl-6 timeline-block-detail">						
										{StoryDetail()} 
								</div>
							</div>
					</div>
					</Fragment>	 
					 )
		 }
 
 }
 export default Edit