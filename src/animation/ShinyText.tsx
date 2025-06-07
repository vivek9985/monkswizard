
interface ShinyTextProps {
    text: string;
    disabled?: boolean;
    speed?: number;
    variant?: string;
    className?: string;
}

const ShinyText: React.FC<ShinyTextProps> = ({ text, variant = "dark", disabled = false, speed = 5, className = '' }) => {
    const animationDuration = `${speed}s`;

    return (
        <div
            className={`${variant === "dark" ? "shiny-text-dark" : "shiny-text-light"} ${disabled ? 'disabled' : ''} ${className}`}
            style={{ animationDuration }}
        >
            {text}
        </div>
    );
};

export default ShinyText;