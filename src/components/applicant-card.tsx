import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import type { Applicant } from "@/data/applicants"
import { Mail, Check, X } from "lucide-react"

interface ApplicantCardProps {
  applicant: Applicant
}

export function ApplicantCard({ applicant }: ApplicantCardProps) {
  return (
    <Card className="flex flex-col h-full">
      <CardHeader className="flex flex-row items-center gap-4 space-y-0 pb-4">
        <Avatar className="h-12 w-12">
          <AvatarImage src={applicant.avatarUrl} alt={applicant.name} data-ai-hint="person portrait" />
          <AvatarFallback>{applicant.name.charAt(0)}</AvatarFallback>
        </Avatar>
        <div>
          <CardTitle className="text-lg">{applicant.name}</CardTitle>
          <p className="text-sm text-muted-foreground">Applied on {applicant.applicationDate}</p>
        </div>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-sm text-foreground/90 italic border-l-2 border-border pl-3">"{applicant.message}"</p>
      </CardContent>
      <CardFooter className="flex justify-end gap-2 pt-4">
        <Button variant="outline" size="sm"><Mail className="mr-2 h-4 w-4" /> Contact</Button>
        <Button variant="outline" size="sm" className="text-green-600 border-green-600 hover:bg-green-50 hover:text-green-700"><Check className="mr-2 h-4 w-4" /> Accept</Button>
        <Button variant="outline" size="sm" className="text-red-600 border-red-600 hover:bg-red-50 hover:text-red-700"><X className="mr-2 h-4 w-4" /> Decline</Button>
      </CardFooter>
    </Card>
  )
}
