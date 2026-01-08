import Link from 'next/link';
import classNames from 'classnames';

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: ButtonVariant;
    size?: ButtonSize;
    href?: string;
    className?: string; // Add className prop
}

export function Button({
    children,
    variant = 'primary',
    size = 'md',
    href,
    className,
    ...props
}: ButtonProps) {
    const baseStyles = 'inline-flex items-center justify-center rounded-lg font-bold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';

    const variants = {
        primary: 'bg-snaf-green text-white hover:bg-opacity-90 focus:ring-snaf-green',
        secondary: 'bg-snaf-orange text-white hover:bg-opacity-90 focus:ring-snaf-orange',
        outline: 'border-2 border-snaf-green text-snaf-green hover:bg-snaf-green hover:text-white',
        ghost: 'text-snaf-green hover:bg-gray-100',
    };

    const sizes = {
        sm: 'px-4 py-2 text-sm',
        md: 'px-6 py-3 text-base',
        lg: 'px-8 py-4 text-lg',
    };

    const classes = classNames(
        baseStyles,
        variants[variant],
        sizes[size],
        className
    );

    if (href) {
        return (
            <Link href={href} className={classes}>
                {children}
            </Link>
        );
    }

    return (
        <button className={classes} {...props}>
            {children}
        </button>
    );
}
