// yeah... i had to let ai do this since im dumb

import * as React from 'react'
import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react'
import {
  DayPicker,
  getDefaultClassNames,
  type PropsBase,
  type PropsSingle,
  type PropsSingleRequired,
  type PropsMulti,
  type PropsMultiRequired,
  type PropsRange,
  type PropsRangeRequired,
  type DayButton,
  type ChevronProps,
  type RootProps,
} from '@daypicker/react'

import { cn } from '@/registry/lib/utils'

type CalendarProps = Omit<PropsBase, 'locale'> & (PropsSingle | PropsSingleRequired | PropsMulti | PropsMultiRequired | PropsRange | PropsRangeRequired | {
  mode?: undefined;
  required?: undefined;
}) & {
  locale?: string
  weekdayFormat?: 'narrow' | 'short' | 'long'
}

function Calendar ({
  className,
  month,
  defaultMonth,
  weekdayFormat = 'short',
  locale = 'en-US',
  showOutsideDays = true,
  captionLayout = 'label',
  classNames,
  components,
  formatters,
  ...props
}: CalendarProps) {
  const defaultClassNames = getDefaultClassNames()

  const mergedFormatters = React.useMemo(
    () => ({
      formatCaption: (date: Date) =>
        new Intl.DateTimeFormat(locale, {
          month: 'long',
          year: 'numeric',
        }).format(date),
      formatMonthDropdown: (date: Date) =>
        new Intl.DateTimeFormat(locale, {
          month: 'long',
        }).format(date),
      formatWeekdayName: (date: Date) =>
        new Intl.DateTimeFormat(locale, {
          weekday: weekdayFormat,
        }).format(date),
      ...formatters,
    }),
    [formatters, locale, weekdayFormat]
  )

  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      captionLayout={captionLayout}
      // navLayout='around'
      className={cn('w-fit rounded-3xl bg-(--bg-elevated) p-4', className)}
      classNames={{
        root: cn('w-fit', defaultClassNames.root),
        months: cn('relative flex flex-col gap-4', defaultClassNames.months),
        month: cn('w-full border-collapse select-none', defaultClassNames.month),
        nav: cn(
          'absolute inset-x-0 top-0 flex w-full items-center justify-between',
          defaultClassNames.nav
        ),
        button_previous: cn(
          'inline-flex size-9 items-center justify-center rounded-2xl text-(--text)/72 outline-none transition-colors duration-150 hover:bg-(--text)/8 hover:text-(--text) aria-disabled:opacity-50',
          defaultClassNames.button_previous
        ),
        button_next: cn(
          'inline-flex size-9 items-center justify-center rounded-2xl text-(--text)/72 outline-none transition-colors duration-150 hover:bg-(--text)/8 hover:text-(--text) aria-disabled:opacity-50',
          defaultClassNames.button_next
        ),
        month_caption: cn(
          'text-sm flex items-center justify-center w-full h-9 px-9 font-medium tracking-[-0.42px] mb-3',
          defaultClassNames.month_caption
        ),
        dropdowns: cn(
          'flex h-9 items-center justify-center gap-1.5 text-sm font-medium',
          defaultClassNames.dropdowns
        ),
        dropdown_root: cn('relative rounded-2xl', defaultClassNames.dropdown_root),
        dropdown: cn('absolute inset-0 bg-popover opacity-0', defaultClassNames.dropdown),
        caption_label: cn(
          'select-none font-medium',
          captionLayout === 'label'
            ? 'text-sm tracking-[-0.42px]'
            : 'flex items-center gap-1 rounded-2xl text-sm [&>svg]:size-3.5 [&>svg]:text-muted-foreground',
          defaultClassNames.caption_label
        ),
        month_grid: cn('w-full border-collapse select-none', defaultClassNames.month_grid),
        weekdays: cn('flex', defaultClassNames.weekdays),
        weekday: cn(
          'w-9 pb-1 text-xs font-normal tracking-[-0.3px] text-(--text)/40',
          defaultClassNames.weekday
        ),
        week: cn('mt-0.5 flex w-full', defaultClassNames.week),
        week_number_header: cn('w-9 select-none', defaultClassNames.week_number_header),
        week_number: cn('text-xs text-muted-foreground select-none', defaultClassNames.week_number),
        day: cn('relative size-9 p-0 text-center', defaultClassNames.day),
        range_start: cn('rounded-none', defaultClassNames.range_start),
        range_middle: cn('rounded-none', defaultClassNames.range_middle),
        range_end: cn('rounded-none', defaultClassNames.range_end),
        today: cn('rounded-none', defaultClassNames.today),
        outside: cn('opacity-30', defaultClassNames.outside),
        disabled: cn('pointer-events-none opacity-30', defaultClassNames.disabled),
        hidden: cn('invisible', defaultClassNames.hidden),
        ...classNames,
      }}
      components={{
        Root: ({ className: rootClassName, rootRef, ...rootProps }: RootProps) => (
          <div
            data-slot='calendar'
            className={cn(rootClassName)}
            {...rootProps}
          />
        ),
        Chevron: ({ className: chevronClassName, orientation, ...chevronProps }: ChevronProps) => {
          if (orientation === 'left') {
            return (
              <ChevronLeftIcon
                className={cn('size-4', chevronClassName)}
                {...chevronProps}
              />
            )
          }

          return (
            <ChevronRightIcon
              className={cn('size-4', chevronClassName)}
              {...chevronProps}
            />
          )
        },
        DayButton: ({ ...props }) => (
          <CalendarDayButton locale={locale} {...props} />
        ),
        ...components,
      }}
      formatters={mergedFormatters}
      {...props}
    />
  )
}

function CalendarDayButton ({
  className,
  day,
  modifiers,
  locale,
  ...props
}: React.ComponentProps<typeof DayButton> & { locale?: string }) {
  return (
    <button
      data-day={day.date.toLocaleDateString(locale)}
      data-today={modifiers.today || undefined}
      data-selected={modifiers.selected || undefined}
      data-selected-single={
        modifiers.selected &&
        !modifiers.range_start &&
        !modifiers.range_end &&
        !modifiers.range_middle
      }
      data-range-start={modifiers.range_start || undefined}
      data-range-end={modifiers.range_end || undefined}
      data-range-middle={modifiers.range_middle || undefined}
      data-disabled={modifiers.disabled || undefined}
      data-outside-month={modifiers.outside || undefined}
      data-unavailable={modifiers.disabled || undefined}
      className={cn(
        'inline-flex size-9 items-center justify-center rounded-2xl text-sm tracking-[-0.39px] text-(--text)/72 outline-none transition-colors duration-150 hover:bg-(--text)/8 hover:text-(--text) data-today:bg-(--text)/8 data-today:font-semibold data-today:text-(--text) data-selected:bg-(--text) data-selected:font-medium data-selected:text-(--bg) data-disabled:pointer-events-none data-unavailable:line-through',
        className
      )}
      {...props}
    />
  )
}

export { Calendar, CalendarDayButton }
