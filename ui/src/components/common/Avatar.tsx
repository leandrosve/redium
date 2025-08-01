import { useMemo, useState } from "react";
import { generateColorForNickname, getInitialsForName } from "@/utils/FormatUtils";
import { join, printIf } from "@/utils/ClassUtils";

interface Props {
  name: string;
  src?: string;
  size?: "sm" | "md" | "lg";
  className?: string;
}

const sizeClasses = {
  sm: "w-7 h-7",
  md: "w-10 h-10",
  lg: "w-16 h-16",
};

const Avatar = ({ name, src, size = "md", className }: Props) => {
  const [color, initials] = useMemo(() => {
    return [generateColorForNickname(name), getInitialsForName(name)];
  }, [name]);

  const [error, setError] = useState(false);
  return (
    <span
      className={join(
        "text-white overflow-hidden rounded-full flex items-center justify-center select-none relative shrink-0",
        color,
        sizeClasses[size],
        className
      )}
      role="img"
      aria-label={name}
    >
      {initials}
      {src && (
        <img
          src={src}
          className={join("absolute h-full w-full text-transparentcursor-pointer text-foreground-200 aspect-square", printIf("hidden", error))}
          alt={name}
          onError={() => setError(true)}
        />
      )}
    </span>
  );
};

export default Avatar;
