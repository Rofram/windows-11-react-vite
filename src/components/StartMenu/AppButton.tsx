import * as Styled from './styles'

type AppButtonProps = {
  icon: string
  alt: string
  setPosition?: (n: number) => void
}

export const AppButton = ({ icon, alt, setPosition }: AppButtonProps) => (
  <Styled.App>
    <img src={icon} alt={alt} />
    <Styled.AppName>{alt}</Styled.AppName>
  </Styled.App>
)