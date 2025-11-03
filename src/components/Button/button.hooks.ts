import { useMemo } from "react";
import { lighten } from "polished";

interface UseButtonHooksProps {
  color: string;
}

const UseButtonHooks = (props: UseButtonHooksProps) => {
  const colorStyles = useMemo(() => {
    return {
      button: {
        color: props.color,
        border: `1px solid ${lighten(0.4, props.color)}`,
        backgroundColor: lighten(0.85, props.color),
      },
    };
  }, [props.color]);

  return {
    colorStyles,
  };
};

export default UseButtonHooks;
