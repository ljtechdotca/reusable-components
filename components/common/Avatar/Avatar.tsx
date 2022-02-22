/* eslint-disable @next/next/no-img-element */
import styles from "./Avatar.module.scss";

interface AvatarProps {
  alt: string;
  background?: string;
  fontSize?: number;
  gap?: number;
  size: number;
  name?: string;
  src: string;
}

export const Avatar = ({
  alt,
  background = "transparent",
  fontSize = 1,
  gap = 0,
  size,
  name,
  src,
}: AvatarProps) => {
  return (
    <div className={styles.root} style={{ gap: `${gap}rem` }}>
      <div className={styles.container}>
        <img
          src={src}
          alt={alt}
          width={size}
          height={size}
          style={{
            background: background,
            width: `${size}px`,
            height: `${size}px`,
          }}
        />
      </div>
      {name && (
        <span
          style={{
            fontSize: `${fontSize}rem`,
          }}
        >
          {name}
        </span>
      )}
    </div>
  );
};

export default Avatar;
