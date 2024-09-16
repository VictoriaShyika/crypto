import LevelSvg from "../assets/icons/star.svg";

const SliderValue = 450;
const MaxSliderValue = 900;

export const Slider = () => {
    return (
	<div className="slider">
		<img src={LevelSvg}/>

		<div className="slider__wrapper">
			<div className="slider__level">
				<p>{`${SliderValue}/${MaxSliderValue} EXP`}</p>
				<p>25 LVL</p>
			</div>
			
			<div className="slider__component">
				<div className="slider__value" style={{width: `${(SliderValue/MaxSliderValue)*100}%`}}/>
			</div>
		</div>
	</div>
  )
}
