import * as Styled from './styles'

export default function WidgetsButton() {
  return (
    <Styled.Container>
      <img src='assets/icons/weather.svg' alt="weather" />
      <Styled.WeatherText>
        <span>8°C</span>
        <span>Partly sunny</span>
      </Styled.WeatherText>
    </Styled.Container>
  )
}