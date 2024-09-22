class Student:
    def __init__(self,science,history):
        self.science=science
        self.history=history
        
    def GetAverage(self):
        return (self.science+self.history)/2