// ✅ Client Component — usa hook (useTheme) y evento onClick
'use client';

import { useTheme } from "@/context/theme/useTheme";
import { Button } from "../atoms/Button";

export default function ThemeButton() {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button onClick={toggleTheme}>
      Tema actual: {theme}
    </Button>
  );
}