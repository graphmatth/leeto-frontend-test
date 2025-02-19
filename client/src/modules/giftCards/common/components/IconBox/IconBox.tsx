import React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/utils/cn"
import { MdFamilyRestroom, MdStackedLineChart, MdCardGiftcard } from "react-icons/md"

const iconMapping = {
  "family": MdFamilyRestroom,
  "line-chart": MdStackedLineChart,
  "gift": MdCardGiftcard,
} as const


type IconName = keyof typeof iconMapping

const iconBoxVariants = cva(
  "size-8 flex items-center justify-center rounded-lg",
  {
    variants: {
      color: {
        pink: "bg-pink-100 text-pink-800",
        green: "bg-green-100 text-green-800",
      },
    },
    defaultVariants: {
      color: "pink"
    },
  }
)

    
interface IconBoxProps extends VariantProps<typeof iconBoxVariants> {
  icon: IconName;
  className?: string;
}

export const IconBox: React.FC<IconBoxProps> = ({ 
  icon, 
  color, 
  className 
}) => {
  const Icon = iconMapping[icon]
  
  return (
    <div className={cn(iconBoxVariants({ color }), className)}>
      <Icon className="size-[18px]" />
    </div>
  )
}