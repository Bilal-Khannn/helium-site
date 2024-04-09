import * as React from 'react';

import { cn } from '@/lib/utils';
import { Button } from './button';

const Card = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
    <div
        ref={ref}
        className={cn(
            'rounded-lg border bg-card text-card-foreground shadow-sm',
            className
        )}
        {...props}
    />
));
Card.displayName = 'Card';

const CardHeader = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
    <div
        ref={ref}
        className={cn('flex flex-col space-y-1.5 p-6', className)}
        {...props}
    />
));
CardHeader.displayName = 'CardHeader';

const CardTitle = React.forwardRef<
    HTMLParagraphElement,
    React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
    <h3
        ref={ref}
        className={cn(
            'text-2xl font-semibold leading-none tracking-tight',
            className
        )}
        {...props}
    />
));
CardTitle.displayName = 'CardTitle';

const CardDescription = React.forwardRef<
    HTMLParagraphElement,
    React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
    <p
        ref={ref}
        className={cn('text-sm text-muted-foreground', className)}
        {...props}
    />
));
CardDescription.displayName = 'CardDescription';

const CardContent = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
    <div ref={ref} className={cn('p-6 pt-0', className)} {...props} />
));
CardContent.displayName = 'CardContent';

const CardFooter = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
    <div
        ref={ref}
        className={cn('flex items-center p-6 pt-0', className)}
        {...props}
    />
));
CardFooter.displayName = 'CardFooter';

function CardDemo() {
    return (
        <Card className='border-custom-orange'>
            <CardHeader>
                <CardTitle>Ecosystem</CardTitle>
            </CardHeader>
            <CardContent className='flex flex-col gap-8'>
                <Card className="w-fit border-custom-orange">
                    <CardHeader>
                        <CardTitle>Create project</CardTitle>
                        <CardDescription>
                            Deploy your new project in one-click.
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <p>Some content</p>
                    </CardContent>
                </Card>
                <Card className="w-fit border-custom-orange">
                    <CardHeader>
                        <CardTitle>Create project</CardTitle>
                        <CardDescription>
                            Deploy your new project in one-click.
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <p>Some content</p>
                    </CardContent>
                </Card>
            </CardContent>
        </Card>
    );
}

export {
    Card,
    CardHeader,
    CardFooter,
    CardTitle,
    CardDescription,
    CardContent,
    CardDemo
};