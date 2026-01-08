import classNames from 'classnames';

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
    container?: boolean;
    className?: string;
    children: React.ReactNode;
}

export function Section({
    container = true,
    className,
    children,
    ...props
}: SectionProps) {
    return (
        <section
            className={classNames('py-16 md:py-24', className)}
            {...props}
        >
            {container ? (
                <div className="container mx-auto px-4">
                    {children}
                </div>
            ) : (
                children
            )}
        </section>
    );
}
