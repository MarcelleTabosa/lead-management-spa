import Container from "./Button.style";

interface ButtonProps {
    label: string;
    onClick: () => void;
    disabled?: boolean;
    size?: "small" | "medium" | "large"
    theme?: "dark" | "light"
}

/**
 * Botão reutilizável para o Design System.
 * @param label - Texto exibido no botão
 * @param onClick - Função disparada no clique
 * @param disabled - Define se o botão está desativado
 * @param size - Define o tamanho do botão (small, medium ou large)
 * @param theme - Define a aparência do botão (dark ou light)
 */

const Button: React.FC<ButtonProps> = ({
    label, 
    onClick,
    disabled = false,
    size = "medium",
    theme = "light"
}) => {
    return (
        <Container onClick={onClick} theme={theme} disabled={disabled} size={size}>
            {label}
        </Container>
    );
}

export default Button;