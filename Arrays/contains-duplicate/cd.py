# return False if list does contain duplicate and True if it does
nums1 = [1, 2, 3, 1]
nums2 = [1, 2, 3, 4]
nums3 = [1, 1, 1, 3, 3, 4, 3, 2, 4, 2]


def contains_dup(nums):
    return len(set(nums)) != len(nums)


print(contains_dup(nums1))
print(contains_dup(nums2))
print(contains_dup(nums3))
