import { NextRequest, NextResponse } from "next/server";
import { getXataClient } from '@/xata';

export async function GET(request: NextRequest) {
  const params = request.nextUrl.searchParams;
  const search = params.get("search") || '';
  const page = parseInt(params.get("page") || "1", 10);
  const tags = params.get("tags");
  const user = params.get("user");

  if (isNaN(page) || page < 1 || page > 2041) {
    return NextResponse.json({
      success: false,
      message: "You did not provide the right arguments.",
    });
  }

  const xata = getXataClient();
  const maxModsPerPage = 24;
  const paginationOptions = {
    pagination: { size: maxModsPerPage, offset: (page - 1) * maxModsPerPage }
  };

  let modsQuery = xata.db.userMods.sort("xata.createdAt", "desc");

  if (user && user.trim()) {
    modsQuery = modsQuery.filter({ author: { $is: user } });
  }

  if (search) {
    modsQuery = modsQuery.filter({$any: [{ title: { $iContains: search } }, { longDescription: { $iContains: search } }]})
  }
  if (tags) {
    const tagsArray = tags.split(",");
    const filterCriteria = tagsArray.map(tag => ({ tags: { $includes: tag } }));
    modsQuery = modsQuery.filter({ $any: filterCriteria });
  }

  const mods = await modsQuery.getPaginated(paginationOptions);
  return NextResponse.json({
    success: true,
    data: {
      mods: mods.records,
      pageCount: mods.meta.page.more ? page + 1 : page,
    },
  });
}