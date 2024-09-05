import { Heading, Text } from '@radix-ui/themes';
import Link from 'next/link';

export const CustomH1 = (props: any) => <Heading className="mt-5" as="h1" size="5" {...props} />;
export const CustomH2 = (props: any) => <Heading className="mt-5" as="h2" size="4" {...props} />;
export const CustomH3 = (props: any) => <Heading className="mt-5" as="h3" size="3" {...props} />;
export const CustomH4 = (props: any) => <Heading className="mt-5" as="h4" size="3" {...props} />;
export const CustomH5 = (props: any) => <Heading className="mt-5" as="h5" size="3" {...props} />;
export const CustomH6 = (props: any) => <Heading className="mt-5" as="h6" size="3" {...props} />;
export const CustomP = (props: any) => <Text size="2" className="leading-8" {...props} />;
export const CustomLink = (props: any) => <Link size="3" {...props} target="_blank"><Text size="2">{props.children}</Text></Link>;
export const CustomImg = ({ src, alt, ...props }: { src: string; alt: string; props: any }) => (
  <img src={src} alt={alt} {...props} />
);
export const CustomUl = (props: any) => <ul className="list-disc list-inside my-2" {...props} />
export const CustomOl = (props: any) => <ol className="list-decimal list-inside my-2" {...props} />
export const CustomLi = (props: any) => <li>
  <Text size="2">{props.children}</Text>
</li>