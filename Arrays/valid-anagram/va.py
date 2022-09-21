s = "anagram"
t = "nagaram"


def valid_anagram(s: str, t: str):
    if len(s) != len(t):
        return False
    subtle_t = list(t)

    for letter in list(s):
        if letter not in subtle_t:
            return False
        subtle_t.remove(letter)
    return True
