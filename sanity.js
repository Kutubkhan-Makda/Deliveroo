import { SanityClient } from "@sanity/client";
import { ImageUrlBuilder } from "@sanity/image-url/lib/types/builder";

const client = SanityClient({
    projectId:'3xr8c87k',
    dataset:'production',
    useCdn:true,
    apiVersion:'2023-02-18',
})

const builder = ImageUrlBuilder(client);
export const urlFor = (source) => builder.image(source);

export default client;