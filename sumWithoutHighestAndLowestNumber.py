def sum_array(arr):
    if (arr == None or len(arr) == 0 or len(arr) == 1):
        return 0
    else:
        newArr = sorted(arr)
        newArr.pop(0)
        newArr.pop()
        return sum(newArr)

print(sum_array([3]))