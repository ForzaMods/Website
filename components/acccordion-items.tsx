"use client";

import React, { forwardRef } from 'react';
import classNames from 'classnames';
import * as Accordion from '@radix-ui/react-accordion';
import { CaretDownIcon } from '@radix-ui/react-icons';
import { Text } from '@radix-ui/themes';

const AccordionItem = React.forwardRef<HTMLDivElement, { children: React.ReactNode; className?: string; value: string }>(({ children, className, ...props }, forwardedRef) => (
  <Accordion.Item
    className={classNames(
      'mt-px overflow-hidden first:mt-0 first:rounded-t last:rounded-b',
      className
    )}
    {...props}
    ref={forwardedRef}
  >
    {children}
  </Accordion.Item>
));
AccordionItem.displayName = 'AccordionItem';


const AccordionTrigger = React.forwardRef<HTMLButtonElement, { children: React.ReactNode; className?: string }>(({ children, className, ...props }, forwardedRef) => (
  <Accordion.Header className="flex">
    <Accordion.Trigger
      className={classNames(
        'group flex gap-5 py-3.5 flex-1 items-center justify-between leading-none cursor-pointer hover:underline',
        className
      )}
      {...props}
      ref={forwardedRef}
    >
      <Text size="2" className="text-left">{children}</Text>
      <CaretDownIcon
        className="ease-[cubic-bezier(0.87,_0,_0.13,_1)] transition-transform duration-100 group-data-[state=open]:rotate-180 w-6 h-6"
        aria-hidden
      />
    </Accordion.Trigger>
  </Accordion.Header>
));
AccordionTrigger.displayName = 'AccordionTrigger';


const AccordionContent = React.forwardRef<HTMLDivElement, { children: React.ReactNode; className?: string }>(({ children, className, ...props }, forwardedRef) => (
  <Accordion.Content
    className={classNames(
      'data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp overflow-hidden text-[15px]',
      className
    )}
    {...props}
    ref={forwardedRef}
  >
    <div className="pb-5 pr-10">
      <Text size="1">
        {children}
      </Text>
    </div>
  </Accordion.Content>
));
AccordionContent.displayName = 'AccordionContent';


const AccordionRoot = React.forwardRef<HTMLDivElement, { children: React.ReactNode; className?: string, type: "single" | "multiple", collapsible?: boolean }>(({ children, className, ...props}, forwardRef) => (
  <Accordion.Root {...props} className={className}>
    {children}
  </Accordion.Root>
))
AccordionRoot.displayName = 'AccordionRoot';


export { AccordionContent, AccordionItem, AccordionTrigger, AccordionRoot }