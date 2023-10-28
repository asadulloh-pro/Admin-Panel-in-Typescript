import { ErrorBoundary } from '@components/error-boundary';
import { Result } from 'antd';
import type { ComponentType } from 'react';

export const hoc = function <SP, HP>(
  hook: (props: Partial<SP>) => HP,
  Component: ComponentType<HP & SP>,
  displayName?: string
) {
  Component.displayName = displayName || 'HocWrapper';
  const HocResult: any = (props: SP) => {
    try {
      const hookProps = hook(props) || ({} as any);
      return (
        <ErrorBoundary>
          <Component {...hookProps} {...props} />
        </ErrorBoundary>
      );
    } catch (error) {
      console.log('HocError', error);
      return <Result status='warning' title='Oops! Something went wrong!' />;
    }
  };

  HocResult.Original = Component;
  HocResult.hook = hook;

  return HocResult as ComponentType<Partial<HP> & Partial<SP>> & {
    Original: ComponentType<HP & SP>;
    hook: typeof hook;
  };
};
