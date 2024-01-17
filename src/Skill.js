export default function Skill({ name, image }) {
	return (
		<div className='skill-div'>
			<img src={image} />
			<div className='skill-name-div'>
				{name}
			</div>
		</div>
	);
}