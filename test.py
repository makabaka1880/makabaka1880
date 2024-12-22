class Solution:
    def isLongPressedName(self, name: str, typed: str) -> bool:
        i, j = 0, 0
        
        while j < len(typed):
            if i < len(name) and name[i] == typed[j]:
                i += 1
                j += 1
            elif j > 0 and typed[j] == typed[j - 1]:
                j += 1
            else:
                return False
        return i == len(name)

# Example usage
print(Solution().isLongPressedName(name="alex", typed="aaleex"))  # Output: True
print(Solution().isLongPressedName(name="saeed", typed="ssaaedd"))  # Output: False
