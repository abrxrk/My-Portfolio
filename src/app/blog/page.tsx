import BlurFade from "@/components/magicui/blur-fade";
import { ExternalLink } from "lucide-react";

export const metadata = {
  title: "Blog",
  description: "My thoughts on software development, life, and more.",
};

const BLUR_FADE_DELAY = 0.04;

export default async function BlogPage() {
  return (
    <section>
      <BlurFade delay={BLUR_FADE_DELAY}>
        <h1 className="font-medium text-2xl mb-8 tracking-tighter">Blog</h1>
      </BlurFade>
      <BlurFade delay={BLUR_FADE_DELAY * 2}>
        <div className="flex flex-col space-y-4 mb-8">
          <div className="rounded-lg border bg-card p-6 text-card-foreground">
            <div className="flex items-center gap-2 mb-4">
              <h2 className="text-lg font-semibold">Read My Blog</h2>
              <ExternalLink className="h-4 w-4" />
            </div>
            <p className="text-muted-foreground mb-4">
              I write about software development, technology insights, and my learning journey. 
              Check out my latest articles on Hashnode where I share tutorials, project breakdowns, 
              and thoughts on the tech industry.
            </p>
            <a
              href="https://abrxrk.hashnode.dev/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
            >
              Visit My Blog
              <ExternalLink className="h-4 w-4" />
            </a>
          </div>
          
          <div className="rounded-lg border bg-card p-6 text-card-foreground">
            <h3 className="text-md font-semibold mb-2">What You&apos;ll Find</h3>
            <ul className="text-muted-foreground space-y-1 text-sm">
              <li>• Software development tutorials and guides</li>
              <li>• Project breakdowns and technical deep-dives</li>
              <li>• Technology insights and industry trends</li>
              <li>• My learning journey and experiences</li>
              <li>• Tips and tricks for developers</li>
            </ul>
          </div>
        </div>
      </BlurFade>
    </section>
  );
}
