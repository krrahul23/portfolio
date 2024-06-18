import { PrimaryButton, SecondaryButton } from './Button.styles';
import { ButtonType } from '../../types/enum';

type ButtonProps = {
	type?: string;
	bType: ButtonType;
	children: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const getButtonFromType = (bType: ButtonType) => {
	switch (bType) {
		case ButtonType.Primary:
			return PrimaryButton;
		case ButtonType.Secondary:
			return SecondaryButton;
		default:
			return PrimaryButton;
	}
};

const Button = ({ type = 'submit', bType, children }: ButtonProps) => {
	const ButtonType = getButtonFromType(bType);
	return <ButtonType type={type}>{children}</ButtonType>;
};

export default Button;
